import { dataFeedAddrNetworkMap, dataFeedAddrNetworkMapV2 } from "./../helper-hardhat-config.ts"
import { DECIMALS, INITIAL_ANSWER } from "./../helper-hardhat-config.ts"
import type { HardhatEthers } from "@nomicfoundation/hardhat-ethers/types"
import { verifyContract } from "@nomicfoundation/hardhat-verify/verify";
import { artifacts, loadEnvironmentFromHardhat } from '#rocketh';
import Hre from "hardhat";
import { networkIdNetworkNameMap } from "../helper-hardhat-config.ts";
import type { EIP1193Account } from "eip-1193";
import type { HardhatRuntimeEnvironment } from "hardhat/types/hre"

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

export async function getNetworkNameV2(): Promise<string> {
    // 获取部署的网络
    // process.argv[0] 是 Node.js 可执行文件的路径
    // process.argv[1] 是该脚本文件的路径
    // 从 process.argv[2] 开始是用户传入的参数,获取从process.argv[2]传入的参数
    const connection = await Hre.network.connect();
    const chainId = connection.networkConfig.chainId;
    let networkName: string | undefined;
    // console.log("chainId :", chainId);
    networkName = networkIdNetworkNameMap.get(Number(chainId))
    // 断言是否为undefined，如果需要连接的网络在networkConfig不存在，返回undefined。
    if (networkName as undefined === undefined) {
        let errorData = "The network  is\"" + networkName + "\"" + "not defined in your helper-hardhat-config.ts";
        throw new Error(errorData);
    } else {
        networkName = networkName as string;
        return networkName;
    }

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
        dataFeedAddr = dataFeedAddrNetworkMap.get(networkName);
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

// 适用于适用hardhat-deploy部署合约脚本:不可以在本地部署部署一个FundMe过程中获取已部署mock合约的地址.但可以单独调用获取已部署合约的地址
// 使用hardhat-deploy部署fundMe合约时，同样需要在同一个运行时环境下部署fundme和mock合约
// 也就是适用npx hardhat deploy --tags fundme  --network localhost 部署fundme,执行01-deploy-FundMe.ts,在执行这个脚本过程中
// 不可以从外部导入其它运行时环境(import hre from "hardhat"),并使用
export async function getDataFeedV2(hre: HardhatRuntimeEnvironment): Promise<EIP1193Account> {
    let dataFeedAddr: EIP1193Account | undefined;
    let networkName = await getNetworkNameV2();
    if (networkName === "hardhat") {
        // 本地网络，创建mock合约，返回地址
        const env = await loadEnvironmentFromHardhat({ hre });
        // MyMockV3Aggregator是合约名
        const mock = env.get<typeof artifacts.MyMockV3Aggregator.abi>('MyMockV3Aggregator');
        // console.log("在本地网络部   署FundMe，需要部署mock合约。已部署mock合约地址：", mock.address);
        return mock.address;
    } else {
        // console.log("mock contract deployment is skipped")
        dataFeedAddr = dataFeedAddrNetworkMapV2.get(networkName);
        // 断言是否为undefined，如果需要连接的网络在networkConfig不存在，返回undefined。
        if (dataFeedAddr as undefined === undefined) {
            let errorData = "The network  is\"" + networkName + "\"" + "not defined in your helper-hardhat-config.ts";
            throw new Error(errorData);
        } else {
            // 断言dataFeedAddr为string，所以可以直接返回
            dataFeedAddr = dataFeedAddr as EIP1193Account;
            return dataFeedAddr;
        }
    }
}

// 验证合约
export async function verifyFundMe(deployedAddress: string, lockTime: bigint, dataFeedAddr: string) {
    verifyContract(
        {
            address: deployedAddress,
            constructorArgs: [lockTime, dataFeedAddr],
            provider: "etherscan", // or "blockscout" for Blockscout-compatible explorers
        },
        Hre,
    );
}