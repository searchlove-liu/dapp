// 需要插件@nomicfoundation/hardhat-toolbox-mocha-ethers

import { network } from "hardhat"

const { ethers } = await network.connect();

const parameter: bigint = 200n;

const FundMe = await ethers.deployContract("FundMe", [parameter]);

console.log("FundMe deployed to:", FundMe.target);