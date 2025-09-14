import { namehash } from "ethers";
import { networkConfig } from "./../helper-hardhat-config.ts"
import { network } from "hardhat";
import { DECIMALS, INITIAL_ANSWER } from "./../helper-hardhat-config.ts"
import { error } from "console";
import type { HardhatEthers } from "@nomicfoundation/hardhat-ethers/types"
// const { ethers } = await network.connect()

export function getNetworkName(): string {
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
    return networkName
}

// ethConnect必须传递过去，如果使用不一样的ethers，在本地网络创建的合约，将不再同一个网络
// ethers在主调函数中的来源：
// import { network } from "hardhat";
// const { ethers, networkHelpers } = await network.connect();
export async function getDataFeed(ethers: HardhatEthers): Promise<string> {
    let dataFeedAddr: string | undefined;
    let networkName = getNetworkName();
    if (networkName === "hardhat") {
        // 本地网络，创建mock合约，返回地址
        const mock = await ethers.deployContract("MyMockV3Aggregator", [DECIMALS, INITIAL_ANSWER]);
        // console.log("在本地网络部署FundMe，需要部署mock合约。已部署mock合约地址：", mock.target);
        return String(mock.target);
    } else {
        // console.log("mock contract deployment is skipped")
        dataFeedAddr = networkConfig.get(networkName);
        // 断言是否为undefined，如果需要连接的网络在networkConfig不存在，返回undefined。
        if (dataFeedAddr as undefined === undefined) {
            let errorData = "The network  is\"" + networkName + "\"" + "not defined in your helper-hardhat-config.ts";
            throw new Error(errorData);
        } else {
            // 断言dataFeedAddr为string，所以可以直接返回
            dataFeedAddr = dataFeedAddr as string;
            return dataFeedAddr;
        }
    }
}