import { assert, expect } from "chai";
import { describe, it, beforeEach } from "node:test";

import { network } from "hardhat";
import { DECIMALS, INITIAL_ANSWER, LOCK_TIME, CONFIRMATIONS } from "../../helper-hardhat-config.ts"
import type { Addressable } from "ethers"
import type { HardhatEthersSigner } from "@nomicfoundation/hardhat-ethers/types"
import { getNetworkName, getDataFeed } from "./../../scripts/utils.ts"
import fundMe from "../../ignition/modules/fundMe.ts";
import { equal } from "assert";
import { json } from "stream/consumers";
import { resolve } from "path";
// networkHelpers 用于操作hardhat网络
const { ethers, networkHelpers } = await network.connect();

// 集成测试，应该在真实测试网络中进行
// 下面代码表示，如果是本地网络则跳过这个测试：describe.skip
// 否则执行describe("test fundMe contract", async function () {...}代码
(getNetworkName() === "hardhat")
    ? describe.skip
    : describe("test fundMe contract", async function () {
        let dataFeedAddr: string | Addressable;
        let fundMeAddr: string | Addressable;
        let accounts: HardhatEthersSigner[];
        beforeEach(async function () {
            // 获取dataFeed,ethers必须传递过去，如果使用不一样的ethers，在本地网络创建的合约，将不再同一个网络
            dataFeedAddr = await getDataFeed(ethers)

            // get account
            accounts = await ethers.getSigners();

            // 获取网络
            let networkName = getNetworkName()
            let confirmations
            // 如果是hardhat网络，不需要等待，否则等待CONFIRMATIONS个区块
            // 如果是hardhat网络，就给账户初始化一些钱，用于测试
            if (networkName === "hardhat") {
                networkHelpers.setBalance(accounts[0].address, ethers.parseEther("100"));
                networkHelpers.setBalance(accounts[1].address, ethers.parseEther("100"));
                confirmations = 0
            } else {
                confirmations = CONFIRMATIONS
            }

            // 部署fundMe额合约
            const fundMe = await ethers.deployContract("FundMe", [LOCK_TIME, dataFeedAddr]);
            await fundMe.deploymentTransaction()?.wait(confirmations);
            fundMeAddr = fundMe.target;
        })

        // test fund and getFund successfully
        it("fund and getFund successfully", async function () {
            const fundMe = await ethers.getContractAt("FundMe", fundMeAddr)
            // 0.3 * 5000 = 1500 > 1000   
            // 5000是指每个eth 5000美元,1000是指funder要获取融资最低的融资金额，100是发起一次融资最低的融资金额
            await fundMe.fund({ value: ethers.parseEther("0.3") })
            // 创建Promise，它的参数是一个函数，这个函数（promise的参数）的第一个参数是resolve，函数体是setTimeout
            // setTimeout的参数，第一个是resolve，第二个是181*1000 毫秒，181秒
            // 总的意思是等待181秒
            // 下面函数（mocha）最长时限是40秒，所以需要重新设置，在hardhat.config.ts中
            // test: {
            //     mocha: {
            //         timeout: 500000
            //     }
            // },
            await new Promise(resolve => setTimeout(resolve, 61 * 1000))
            // fundMe.getFund(),函数执行，只是说明，交易被发送，不代表交易被写入链上。
            // 如果没有上链，就会返回一个空的回执，没有保存数据的回执，就无法获取有没有触发一个事件
            // 交易发送 → 2. 矿工处理 → 3. 生成回执 → 4. 包含事件日志
            // 事件可以实时监听，也可以从回执中获取
            const getFundTx = await fundMe.getFund()
            // waiting tx confirmation
            const getFundRecept = await getFundTx.wait()
            expect(getFundRecept)
                .to.emit(fundMe, "FundWithdrawByOwner")
                .withArgs(ethers.parseEther("0.3"))

        })

        // test fund and reFund successfully
        it("fund and reFund successfully", async function () {
            const fundMe = await ethers.getContractAt("FundMe", fundMeAddr)
            // refund is triggered when fundMe contract target was not reached 
            //   1000 > 0.1 * 5000 = 500 > 100 
            // 3000是指每个eth 5000美元,1000是指funder要获取融资最低的融资金额，100是发起一次融资最低的融资金额
            await fundMe.fund({ value: ethers.parseEther("0.1") })
            // 创建Promise，它的参数是一个函数，这个函数（promise的参数）的第一个参数是resolve，函数体是setTimeout
            // setTimeout的参数，第一个是resolve，第二个是181*1000 毫秒，181秒
            // 总的意思是等待181秒
            // 下面函数（moka）最长时限是40秒，所以需要重新设置，在hardhat.config.ts中
            // test: {
            //     mocha: {
            //         timeout: 500000
            //     }
            // },

            await new Promise(resolve => setTimeout(resolve, 61 * 1000))
            // fundMe.getFund(),函数执行，只是说明，交易被发送，不代表交易被写入链上。
            // 如果没有上链，就会返回一个空的回执，没有保存数据的回执，就无法获取有没有触发一个事件
            // 交易发送 → 2. 矿工处理 → 3. 生成回执 → 4. 包含事件日志
            // 事件可以实时监听，也可以从回执中获取
            const reFundTx = await fundMe.refund()
            // waiting tx confirmation
            const reFundRecept = await reFundTx.wait()
            expect(reFundRecept)
                .to.emit(fundMe, "ReFundByFunder")
                .withArgs(accounts[0].address, ethers.parseEther("0.1"))

        })


    }) 