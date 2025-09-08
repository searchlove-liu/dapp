import hre from "hardhat";
import FundMeModule from "../ignition/modules/fundMe.js";

async function main() {
  const connection = await hre.network.connect();
  //   这个变量名需要和ignition-fundMe-deploy.js中返回的变量名一致
  const { fundMeFuture } = await connection.ignition.deploy(FundMeModule);
  // 下面是viem的写法，之间的切换，查看README.md,返回合约地址
  console.log(`fundMe deployed to: ${fundMeFuture}`);
  // 下面是ethers.js的写法，返回合约地址
  // console.log(`fundMe deployed to: ${(await fundMeFuture.target)}`);
}

main().catch(console.error);