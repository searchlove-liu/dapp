import { task } from "hardhat/config";
import { network } from "hardhat";
const { ethers } = await network.connect();
import hre from "hardhat";


task("deploy-fundme", "deploy FundMe contract")
    .setAction(async () => import("./../scripts/fundMeDp-ethers.ts"))