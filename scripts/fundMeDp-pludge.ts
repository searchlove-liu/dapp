import { artifacts, loadEnvironmentFromHardhat } from '#rocketh';
import hre from 'hardhat';
import { getDataFeedV2 } from "./utils.ts";

async function main() {
    const env = await loadEnvironmentFromHardhat({ hre });
    // FundMe是合约名
    // 这行代码没有部署FundMe合约，只是将部署在网络中的合约进行调用
    const fundMe = env.get<typeof artifacts.FundMe.abi>('FundMe');

    const dataFeed = await env.read(fundMe, {
        functionName: "dataFeed",
        args: [],
    });

    console.log(dataFeed);
}
main();
