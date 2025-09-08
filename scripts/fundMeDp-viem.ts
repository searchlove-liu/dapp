import { network } from "hardhat"

const { viem } = await network.connect();

const parameter: bigint = 200n;

const FundMe = await viem.deployContract("FundMe", [parameter]);

console.log("FundMe deployed to:", FundMe.address);