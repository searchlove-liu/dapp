// 需要插件@nomicfoundation/hardhat-toolbox-mocha-ethers

import { network } from "hardhat"

import { LOCK_TIME, DATAFEED_ADDR, CONFIRMATIONS } from "./../helper-hardhat-config.ts"

import { getDataFeed, getNetworkName, verifyFundMe } from "./utils.ts"

const { ethers } = await network.connect();

async function main() {
    let dataDeed: string;
    try {
        dataDeed = await getDataFeed(ethers);
    } catch (error) {
        console.error(error)
        process.exit();
    }

    // 返回合约实例，ethers是一个合约工厂，1800n代表一个大整数
    const fundMe = await ethers.deployContract("FundMe", [LOCK_TIME, dataDeed]);
    // ethers.getContractFactory
    await fundMe.waitForDeployment();
    console.log("FundMe deployed to:", fundMe.target);

    const networkName = getNetworkName()
    if (networkName !== "hardhat") {
        // 等待区块确认，确保合约已经被区块链网络接受
        // 太小会报错，无法验证通过
        console.log("waiting %d blocks for confirmations", CONFIRMATIONS);
        await fundMe.deploymentTransaction()?.wait(CONFIRMATIONS);

        // 验证合约(不需要，部署的时候就已经验证通过了)
        console.log("verifying FundMe contract ", fundMe.target);
        await verifyFundMe(String(fundMe.target), LOCK_TIME, DATAFEED_ADDR);
    }
}

main().then().catch((error) => {
    console.error(error);
    process.exit(0);
})

