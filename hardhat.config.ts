import type { HardhatUserConfig } from "hardhat/config";

import hardhatToolboxMochaEthers from "@nomicfoundation/hardhat-toolbox-mocha-ethers";
// import hardhatToolboxViem from "@nomicfoundation/hardhat-toolbox-viem";

import { configVariable } from "hardhat/config";

import hardhatVerify from "@nomicfoundation/hardhat-verify";

// 为了解决：下列问题
//  A network request failed. This is an error from the block explorer, 
// not Hardhat. Error: Connect Timeout Error
// 参考：https://www.cnblogs.com/shaozhu520/p/18757397
import { ProxyAgent, setGlobalDispatcher } from "undici";
const proxyAgent = new ProxyAgent("http://127.0.0.1:7890");
setGlobalDispatcher(proxyAgent);

const config: HardhatUserConfig = {
  plugins: [hardhatToolboxMochaEthers, hardhatVerify],
  solidity: {
    profiles: {
      default: {
        version: "0.8.28",
      },
      // 如果使用ignition部署合约，默认值为production，在部署合约的时候一同对合约进行验证，所以部署合约和验证合约使用的profile一致
      // 使用eth，hardhat script，ethers部署合约时，默认值为default，所以在验证合约时，要指定--build-profile default，保证前后一致
      production: {
        version: "0.8.28",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
    },
  },

  networks: {
    hardhatMainnet: {
      type: "edr-simulated",
      chainType: "l1",
    },
    hardhatOp: {
      type: "edr-simulated",
      chainType: "op",
    },

    sepolia: {
      type: "http",
      // 通过这一标识，可以查看当前部署网络
      chainId: 11155111,
      chainType: "l1",
      url: configVariable("SEPOLIA_RPC_URL"),
      accounts: [configVariable("SEPOLIA_PRIVATE_KEY"), configVariable("SEPOLIA_PRIVATE_KEY2")],
    },
  },

  verify: {
    etherscan: {
      // Your API key for Etherscan
      // Obtain one at https://etherscan.io/
      // ETHERSCAN_API_KEY赋值参考https://hardhat.org/docs/learn-more/configuration-variables
      //  一定要写configVariable
      // api 测试，https://api.etherscan.io/v2/，用于查看api是否有效
      apiKey: configVariable("ETHERSCAN_API_KEY"),
    },
    blockscout: {
      enabled: false,
    },
  },
};

export default config;
