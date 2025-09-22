import type { HardhatUserConfig } from "hardhat/config";

import hardhatToolboxMochaEthers from "@nomicfoundation/hardhat-toolbox-mocha-ethers";
// import hardhatToolboxViem from "@nomicfoundation/hardhat-toolbox-viem";

// import hardhatNodeTestRunner from "@nomicfoundation/hardhat-node-test-runner";

import { configVariable } from "hardhat/config";

import hardhatVerify from "@nomicfoundation/hardhat-verify";

// npm install -D hardhat-deploy@next rocketh @rocketh/deploy @rocketh/read-execute
// 参考：https://github.com/wighawag/hardhat-deploy
// 官网：https://www.npmjs.com/package/hardhat-deploy
// 案例：https://github.com/wighawag/template-ethereum-contracts
// 之前没有安装好，是因为安装的其它没用包和hardhat-deploy依赖包有冲突
// 成功之后，调用npx hardhat --help,在AVAILABLE TASKS中会显示deploy
import HardhatDeploy from "hardhat-deploy";

// import "hardhat-gas-reporter"
// import "solidity-coverage"
// 上面不能用，版本冲突
// import 'solidity-coverage'
import fundMeDeploy from "./tasks/deploy-FundMe.ts"

// 为了解决：下列问题
//  A network request failed. This is an error from the block explorer, 
// not Hardhat. Error: Connect Timeout Error
// 参考：https://www.cnblogs.com/shaozhu520/p/18757397
import { ProxyAgent, setGlobalDispatcher } from "undici";
const proxyAgent = new ProxyAgent("http://127.0.0.1:7890");
setGlobalDispatcher(proxyAgent);

const config: HardhatUserConfig = {
  plugins: [hardhatToolboxMochaEthers, hardhatVerify, HardhatDeploy, fundMeDeploy],

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

  test: {
    mocha: {
      timeout: 500000
    }
  },

  networks: {
    // hardhat网络，chainId=31337
    hardhatMainnet: {
      type: "edr-simulated",
      chainType: "l1",
      // accounts: [configVariable("HARDHAT_PRIVATE_KEY"), configVariable("HARDHAT_PRIVATE_KEY2")]
    },
    localhost: {
      type: "http",
      // 和上面的hardhatMainnet一个id。都是hardhat网络。只是这个需要主动启用。
      // 并且适用npx hardhat run xxx。这个localhost默认hardhat网络，id就是31337。
      // 但是用pnpm execute localhost xxx时,查不出这个网络的id,所以在这里手动设置.
      chainId: 31337,
      url: "http://127.0.0.1:8545"
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
