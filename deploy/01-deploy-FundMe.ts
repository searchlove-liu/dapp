// we import what we need from the #rocketh alias, see ../rocketh.ts
import { deployScript, artifacts, loadEnvironmentFromHardhat } from "#rocketh";
import { LOCK_TIME, DATAFEED_ADDR, CONFIRMATIONS, DECIMALS, INITIAL_ANSWER } from "../helper-hardhat-config.ts"
import { getNetworkNameV2, getDataFeedV2 } from "../scripts/utils.ts"
import type { EIP1193Account } from "eip-1193";
import hre from "hardhat"
// 此函数不需要其它地方调用，也可以使用npx hardhat  deploy --tags fundme进行执行
export default deployScript(
    async ({ deploy, namedAccounts, deployments }) => {
        let dataFeedAddr: EIP1193Account;
        const { deployer } = namedAccounts;
        // 这里获取了合约地址
        console.log("deployments.get.contractName=", deployments["FundMe"].address)
        const networkName = await getNetworkNameV2();
        // 如果是hardhat网络，则一同部署mock合约
        if (networkName === "hardhat") {
            const mock = await deploy("MyMockV3Aggregator", {
                account: deployer,
                artifact: artifacts.MyMockV3Aggregator,
                args: [DECIMALS, INITIAL_ANSWER],
            });
            dataFeedAddr = mock.address;
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
    { tags: ["all", "fundme"] }
);

// 注:
// 使用hardhat-deploy部署fundMe合约时，同样需要在同一个运行时环境下部署fundme和mock合约
// 也就是使用npx hardhat deploy --tags fundme  --network localhost 部署fundme,执行01-deploy-FundMe.ts,在执行这个脚本过程中
// 不可以从外部导入其它运行时环境(import hre from "hardhat"),并使用.
// 当然如果使用loadEnvironmentFromHardhat获取可以.
