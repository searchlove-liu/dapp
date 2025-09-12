import { assert } from "chai";

import { network } from "hardhat";
import { DECIMALS, INITIAL_ANSWER, LOCK_TIME, DATAFEED_ADDR } from "../helper-hardhat-config.ts"
import type { Addressable } from "ethers"
import type { HardhatEthersSigner } from "@nomicfoundation/hardhat-ethers/types"
import { getNetworkName, getDataFeed } from "./../scripts/utils.ts"
const { ethers } = await network.connect();

describe("test fundMe contract", async function () {
    let dataFeedAddr: string | Addressable;
    let fundMeAddr: string | Addressable;
    let accounts: HardhatEthersSigner[];
    beforeEach(async function () {
        // 获取dataFeed
        dataFeedAddr = await getDataFeed()

        // get account
        accounts = await ethers.getSigners();

        // 部署fundM额合约
        const fundMe = await ethers.deployContract("FundMe", [LOCK_TIME, dataFeedAddr]);
        await fundMe.deploymentTransaction()?.wait(1);
        fundMeAddr = fundMe.target;
    })

    it("test if mock contract has been deployed correctly", async function () {
        const mocks = await ethers.deployContract("MyMockV3Aggregator", [DECIMALS, INITIAL_ANSWER]);
        await mocks.deploymentTransaction()?.wait();
        // console.log("address of deployed contract :", mocks.target);
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
}) 