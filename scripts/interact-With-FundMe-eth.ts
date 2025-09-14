import { network } from "hardhat";
const { ethers } = await network.connect();
import "dotenv/config";
import { Contract } from "ethers"
import { HardhatEthersSigner } from "@nomicfoundation/hardhat-ethers/types"
import { error } from "console";
import { get } from "http";

// 可以更新.env中合约来重新赋值
const deploy_contract_address = process.env.DEPLOYED_CONTRACT_ADDRESS;
// 返回合约实例
// console.log("deployed contract address is ", deploy_contract_address, "\n")
const fundMe = await ethers.getContractAt("FundMe", String(deploy_contract_address));

//  保证获取到异常之后继续执行
async function safeExecute(task: () => Promise<any>, errData?: string) {
    try {
        let tx = await task()
        await tx.wait;
    } catch (error) {
        console.error(errData, ":");
        console.error(error);
        // throw error;
    }
}

async function getBalance() {
    //  check balance of contract
    console.log("check balance of contract: ");
    try {
        let balanceOfContract = await ethers.provider.getBalance(fundMe.target);
        console.log("contract balance is %d \n", balanceOfContract);
    } catch (error) {
        console.log("check balance of contract failed:");
        console.error(error, "\n");
    }
}

async function getFund() {
    console.log("get fund with owner:");
    try {
        let tx = await fundMe.getFund();
        await tx.wait(1);
    } catch (error) {
        console.log("getFund with owner failed:")
        console.error(error, "\n")
    }
}

async function fund(account: HardhatEthersSigner) {
    console.log("fund contract with account %s \n", account.address);
    try {
        // 如果是配置中的第一个账户，可写为：
        // let tx = fundMe.fund({ value: ethers.parseEther("0.1") });
        let tx = await fundMe.connect(account).fund({ value: ethers.parseEther("0.1") });
        await tx.wait(1);
    } catch (error) {
        console.log("fund with frist account failed:");
        console.error(error, "\n");
    }
}

async function main() {
    // init 2 accounts
    const [fristAccount, secondAccount] = await ethers.getSigners();
    // 打印账户地址,不同网络得到的地址不同
    // console.log("Frist account is %s \n", fristAccount.address);
    // console.log("Second account is %s \n", secondAccount.address);

    // // fund contract with frist account
    await fund(fristAccount);

    // //  check balance of contract
    // await getBalance();

    // fund contract with second account
    // await fund(secondAccount);

    // getFund
    // await getFund()

    //  check balance of contract
    await getBalance();

    // check mapping
    let fristAccountBalanceInFundMe = await fundMe.fundersToAmount(fristAccount.address);
    console.log("balance of %s is %d", fristAccount.address, fristAccountBalanceInFundMe);
    let secondAccountBalanceInFundMe = await fundMe.fundersToAmount(secondAccount.address);
    console.log("balance of %s is %d", secondAccount.address, secondAccountBalanceInFundMe);

}

main()