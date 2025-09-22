import { assert, expect } from "chai";
import { describe, it, beforeEach } from "node:test";

import { network, deployments } from "hardhat";
import { DECIMALS, INITIAL_ANSWER, LOCK_TIME, CONFIRMATIONS } from "../../helper-hardhat-config.ts"
import type { Addressable } from "ethers"
import type { HardhatEthersSigner } from "@nomicfoundation/hardhat-ethers/types"
import { getNetworkName, getDataFeed } from "./../../scripts/utils.ts"
import fundMe from "../../ignition/modules/fundMe.ts";
import { equal } from "assert";
import { json } from "stream/consumers";
// networkHelpers 用于操作hardhat网络
const { ethers, networkHelpers } = await network.connect();

// 单元测试,在本地网络中运行
// 下面代码表示，如果是本地网络则执行describe("test fundMe contract", async function () {...}代码
// 否则跳过这个测试：describe.skip
(!(getNetworkName() === "hardhat"))
    ? describe.skip
    : describe("test fundMe contract", async function () {
        let dataFeedAddr: string | Addressable;
        let fundMeAddr: string | Addressable;
        let accounts: HardhatEthersSigner[];
        beforeEach(async function () {
            // 获取dataFeed,ethers必须传递过去，如果使用不一样的ethers，在本地网络创建的合约，将不再同一个网络
            dataFeedAddr = await getDataFeed(ethers)

            // get account
            // 如果测试网是hardhatMainnet，这个地址是hardhatMainnet的地址
            // 使用npx hardhat node启动网络后会给20个地址，这个accounts就是那20个地址，默认金额10000eth
            accounts = await ethers.getSigners();

            // 获取网络
            let networkName = getNetworkName()
            // 如果本地网络，不需要等待，否则等待CONFIRMATIONS个区块
            let confirmations
            if (networkName === "hardhat") {
                confirmations = 1
            } else {
                confirmations = CONFIRMATIONS
            }

            // 部署fundMe额合约
            const fundMe = await ethers.deployContract("FundMe", [LOCK_TIME, dataFeedAddr]);
            await fundMe.deploymentTransaction()?.wait(confirmations);
            fundMeAddr = fundMe.target;
        })

        it("test if owner is msg.sender", async function () {
            const fundMe = await ethers.getContractAt("FundMe", fundMeAddr);
            assert.equal((await fundMe.owner()), accounts[0].address);
        })

        it("test if dataFeed is assigned correctly", async function () {
            const fundMe = await ethers.getContractAt("FundMe", fundMeAddr);
            const dataFeed = await fundMe.dataFeed();
            assert.equal(dataFeed, dataFeedAddr);
        })

        // fund getFund refund
        // test fund
        // 条件：windows open;  value greater than minimum-value; 
        // 1、windows open
        it("windwows closed && value greater than minimun-value : fund filed", async function () {
            // lockTime of FundMe is 180n,这里使hardhat网络中时间变为200s之后，这时窗口关闭
            // 一定要写await，否则可能导致后面代码执行结束，这个代码才结束，从而导致，窗口没有关闭
            await networkHelpers.time.increase(200);
            const fundMe = await ethers.getContractAt("FundMe", fundMeAddr)
            expect(fundMe.fund({ value: ethers.parseEther("1") })).to.be.revertedWith("window is closed")
            // const ftx = await fundMe.fund({ value: ethers.parseEther("1") }).catch((error) => {
            //     console.log(error)
            // })
        })

        // 2、value greater than minimum-value;
        it("window open && value is less than minimum: fund filed", async function () {
            // 窗口开启（没有超时），发起金额小于最小值
            const fundMe = await ethers.getContractAt("FundMe", fundMeAddr);
            expect(fundMe.fund({ value: ethers.parseEther("0.01") })).to.be.revertedWith("Send more ETH");
            // fundMe.fund({ value: ethers.parseEther("0.01") }).catch((error) => {
            //     console.error(error)
            // })
        })

        // 3、funder balance 
        it("window open && value greater than minimun-value: fund seccess", async function () {
            const fundMe = await ethers.getContractAt("FundMe", fundMeAddr);

            // 第二个账户发起两次fund
            await fundMe.connect(accounts[1]).fund({ value: ethers.parseEther("1") })
            await fundMe.connect(accounts[1]).fund({ value: ethers.parseEther("1") })

            //hardhat，不会主动创建区块，所以需要创建区块，将交易上链
            await networkHelpers.mine(2)

            assert.equal(await fundMe.fundersToAmount(
                accounts[1].address),
                ethers.parseEther("2"),
                "第二个账户余额正确"
            )
        })

        // test getFund
        // 条件：windows close；only owner call；reaching target
        // 1、windows close
        it("windows open && caller of owner && reaching target: getFund failed", async function () {
            const fundMe = await ethers.getContractAt("FundMe", fundMeAddr);
            // fund一个交易，value大于target
            await fundMe.fund({ value: ethers.parseEther("10") })
            // 数据上链
            await networkHelpers.mine(2)
            // owner调用（默认是配置文件中的第一个账户,对应accounts[0]创建合约
            expect(fundMe.getFund()).to.be.revertedWith("window is not closed")
        })

        // 2、only owner call
        it("windows close && caller isn't owner && reaching target: getFund failed", async function () {
            const fundMe = await ethers.getContractAt("FundMe", fundMeAddr);
            // fund一个交易，value大于target
            await fundMe.fund({ value: ethers.parseEther("10") })
            // 数据上链
            await networkHelpers.mine(2)
            // 让hardhat网络时间流逝200s，fundMe 锁定时间LOCK_TIME 为180s
            await networkHelpers.time.increase(200)
            // 非owner调用（默认是配置文件中的第一个账户,对应accounts[0]创建合约
            expect(fundMe.connect(accounts[1]).getFund()).to.be.revertedWith("this function can only be called by owner")
        })

        // 3、reaching target
        it("windows close && caller of owner && not reach the target: getFund failed", async function () {
            const fundMe = await ethers.getContractAt("FundMe", fundMeAddr);
            // fund一个交易，value小于target
            await fundMe.fund({ value: ethers.parseEther("0.1") })
            // 数据上链
            await networkHelpers.mine(2)
            // 让hardhat网络时间流逝200s，fundMe 锁定时间LOCK_TIME 为180s
            await networkHelpers.time.increase(200)
            // 非owner调用（默认是配置文件中的第一个账户,对应accounts[0]创建合约
            expect(fundMe.getFund()).to.be.revertedWith("Target not reached")
        })

        // success
        it("windows close && caller of owner &&  reaching target: getFund success", async function () {
            const fundMe = await ethers.getContractAt("FundMe", fundMeAddr);
            // fund一个交易，value小于target
            await fundMe.fund({ value: ethers.parseEther("10") })
            // 数据上链
            await networkHelpers.mine(2)
            // 让hardhat网络时间流逝200s，fundMe 锁定时间LOCK_TIME 为180s
            // 一定要注意写await
            await networkHelpers.time.increase(200);
            // 调用getFund函数，如果成果触发FundWithdrawByOwner事件，事件带有参数：ethers.parseEther("10")
            // fundMe.getFund(),函数执行，只是说明，交易被发送，不代表交易被打包到区块，
            // 在本地测试网络，因为没有延迟，所以可以这么写。但在真实测试网络，不可以这么写，
            // 详细查看FundMe.staging.test.ts
            expect(fundMe.getFund())
                .to.emit(fundMe, "FundWithdrawByOwner")
                .withArgs(ethers.parseEther("10"))


            // 事件监听
            // const fillter = fundMe.filters.FundWithdrawByOwner()
            // await fundMe.once(fillter, (amount) => {
            //     console.log("事件触发:", amount);
            // });
            // const tx = await fundMe.getFund()
            // networkHelpers.mine(2)

        })

        // test refund
        // xxx

        // 集成测试


    }) 