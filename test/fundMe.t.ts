import { equal } from "assert";
import { assert } from "chai";

import { network } from "hardhat";
const { ethers } = await network.connect();

describe("test fundMe contract", async function () {
    it("test if owner is msg.sender", async function () {
        const accounts = await ethers.getSigners();
        const fundMe = await ethers.deployContract("FundMe", [180n]);
        await fundMe.deploymentTransaction()?.wait(1);
        assert.equal((await fundMe.owner()), accounts[0].address)
    })

    it("test if dataFeed is assigned correctly", async function () {
        const fundMe = await ethers.deployContract("FundMe", [180n]);
        await fundMe.deploymentTransaction()?.wait(1);
        const dataFeed = await fundMe.dataFeed();
        assert.equal(dataFeed, "0x694AA1769357215DE4FAC081bf1f309aDC325306");
    })
}) 