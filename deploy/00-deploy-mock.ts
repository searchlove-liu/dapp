// we import what we need from the #rocketh alias, see ../rocketh.ts
import { deployScript, artifacts } from "#rocketh";
import { DECIMALS, INITIAL_ANSWER } from "../helper-hardhat-config.ts"
// 此函数不需要其它地方调用，也可以使用npx hardhat --network sepolia deploy进行执行
export default deployScript(
    async ({ deploy, namedAccounts }) => {
        const { deployer } = namedAccounts;

        // this script is deploy contract
        await deploy("MyMockV3Aggregator", {
            account: deployer,
            artifact: artifacts.MyMockV3Aggregator,
            args: [DECIMALS, INITIAL_ANSWER],
        });
    },
    // finally you can pass tags and dependencies
    { tags: ["all", "mock"] }
);
