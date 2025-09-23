// we import what we need from the #rocketh alias, see ../rocketh.ts
import { deployScript, artifacts, loadEnvironmentFromHardhat } from "#rocketh";
import { LOCK_TIME, DATAFEED_ADDR, CONFIRMATIONS, DECIMALS, INITIAL_ANSWER } from "../helper-hardhat-config.ts"
import { getNetworkNameV2, getDataFeedV2 } from "../scripts/utils.ts"
import type { EIP1193Account } from "eip-1193";
import hre from "hardhat"
// 此函数不需要其它地方调用，也可以使用npx hardhat  deploy --tags fundme进行执行
export default deployScript(
    async ({ deploy, namedAccounts, deployments, viem, get }) => {
        let dataFeedAddr: EIP1193Account;
        const { deployer } = namedAccounts;
        const networkName = await getNetworkNameV2();
        // 如果是hardhat网络，则一同部署mock合约
        if (networkName === "hardhat") {
            // 这里获取了合约地址(dependencies,保证了这个合约的一定会被执行),下面三种方式都可以获取mock合约地址
            // const mockAddress = deployments["MyMockV3Aggregator"].address
            // const mockAddress = get("MyMockV3Aggregator").address;
            const mock = viem.getContract("MyMockV3Aggregator") //viem可以读取可读或可写合约。用于对以部署合约进行操作
            const mockAddress = mock.address;
            dataFeedAddr = mockAddress;
        } else {
            dataFeedAddr = DATAFEED_ADDR;
        }

        console.log("dataFeedAddr :", dataFeedAddr)
        // this script is deploy contract
        await deploy("FundMe", {
            account: deployer,
            artifact: artifacts.FundMe,
            args: [LOCK_TIME, dataFeedAddr],
        });
    },
    // finally you can pass tags and dependencies
    // dependencies:["mock"],可以让在执行当前部署脚本之前，tags为mock的合约提前被部署，如果没有部署，则会执行它的部署脚本
    { tags: ["all", "fundme"], dependencies: ["mock"] }
);

// 注:
// 使用hardhat-deploy部署fundMe合约时，同样需要在同一个运行时环境下部署fundme和mock合约
// 也就是使用npx hardhat deploy --tags fundme  --network localhost 部署fundme,执行01-deploy-FundMe.ts,在执行这个脚本过程中
// 不可以从外部导入其它运行时环境(import hre from "hardhat"),并使用.
// 当然如果使用loadEnvironmentFromHardhat获取可以.
