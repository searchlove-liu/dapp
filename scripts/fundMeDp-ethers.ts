// 需要插件@nomicfoundation/hardhat-toolbox-mocha-ethers

import { network } from "hardhat"

import { verifyContract } from "@nomicfoundation/hardhat-verify/verify";

import hre from "hardhat";

const { ethers } = await network.connect();

async function main() {
    // 返回合约实例，ethers是一个合约工厂，200n代表一个大整数
    const fundMe = await ethers.deployContract("FundMe", [30n]);
    // ethers.getContractFactory
    await fundMe.waitForDeployment();
    console.log("FundMe deployed to:", fundMe.target);

    // 获取部署的网络
    // process.argv[0] 是 Node.js 可执行文件的路径
    // process.argv[1] 是该脚本文件的路径
    // 从 process.argv[2] 开始是用户传入的参数,获取从process.argv[2]传入的参数
    let networkName: string = "hardhat";
    const userArgs = process.argv.slice(2);
    for (let i = 0; i < userArgs.length; i++) {
        let arg = userArgs[i];
        if (arg === "--network") {
            // console.log("Network type is ",userArgs[i + 1], "\n");
            networkName = userArgs[i + 1];
            break;
        }
    }

    if (networkName !== "hardhat") {
        // 等待区块确认，确保合约已经被区块链网络接受
        let blockConfirmations = 1;
        console.log("waiting %d blocks for confirmations", blockConfirmations);
        await fundMe.deploymentTransaction()?.wait(blockConfirmations);

        // 验证合约(不需要，部署的时候就已经验证通过了)
        // console.log("verifying FundMe contract ", fundMe.target);
        // await verifyFundMe(String(fundMe.target), 200n);
    }

    // init 2 accounts
    const [fristAccount, secondAccount] = await ethers.getSigners();
    // 打印账户地址,不同网络得到的地址不同
    // console.log("Frist account is ", fristAccount.address);
    // console.log("Second account is ", secondAccount.address);

    // fund contract with frist account
    const tx = fundMe.fund({ value: ethers.parseEther("0.0001") });
    (await tx).wait();

    //  check balance of contract
    const balanceOfContract = await ethers.provider.getBalance(fundMe.target);
    console.log("balance if contract :", balanceOfContract);
    //  fund contract with second account
    //  check balance of contract
    //  check mapping fundersToAmmount

}

// 验证合约
async function verifyFundMe(deployedAddress: string, constructorArgs: bigint) {
    verifyContract(
        {
            address: deployedAddress,
            constructorArgs: [constructorArgs],
            provider: "etherscan", // or "blockscout" for Blockscout-compatible explorers
        },
        hre,
    );
}

main().then().catch((error) => {
    console.error(error);
    process.exit(0);
})

