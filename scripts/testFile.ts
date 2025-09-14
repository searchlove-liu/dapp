import { getNetworkName, getDataFeed } from "./../scripts/utils.ts"

!(getNetworkName() === "hardhat") ? console.log("frist") : console.log("second")
