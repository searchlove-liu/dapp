// we import what we need from the #rocketh alias, see ../rocketh.ts
import { deployScript, artifacts } from "#rocketh";
import { LOCK_TIME, DATAFEED_ADDR, CONFIRMATIONS } from "./../helper-hardhat-config.ts"
// 此函数不需要其它地方调用，也可以使用npx hardhat --network sepolia deploy进行执行
export default deployScript(
    async ({ deploy, namedAccounts }) => {
        const { deployer } = namedAccounts;

        // this script is deploy contract
        const result = await deploy("FundMe", {
            account: deployer,
            artifact: artifacts.FundMe,
            args: [LOCK_TIME, DATAFEED_ADDR],
        });
    },
    // finally you can pass tags and dependencies
    { tags: ["all", "FundMe"] }
);
