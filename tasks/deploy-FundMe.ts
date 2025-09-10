import { task } from "hardhat/config";

task("deploy-fundme", "deploy FundMe contract")
    .setAction(async () => import("./fundMeDp-ethers-task.ts"));

export { };