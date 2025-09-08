// 需要插件：@nomicfoundation/hardhat-toolbox-viem
import { network } from "hardhat"

const { viem } = await network.connect();
// 200n代表一个大整数
const FundMe = await viem.deployContract("FundMe", [200n]);

console.log("FundMe deployed to:", FundMe.address);