// 需要插件：@nomicfoundation/hardhat-toolbox-viem
import { network } from "hardhat"
import { LOCK_TIME, DATAFEED_ADDR } from "./../helper-hardhat-config.ts"

const { viem } = await network.connect();
// 200n代表一个大整数
const FundMe = await viem.deployContract("FundMe", [LOCK_TIME, DATAFEED_ADDR]);

console.log("FundMe deployed to:", FundMe.address);