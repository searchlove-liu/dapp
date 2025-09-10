参考：https://hardhat.org/ignition/docs/guides/ethers

env-enc使用
// 将敏感值存入.env-enc文件中
// 需要安装包：npm install --save-dev dotenv
// 这个包用于对.env文件中的数据加密:npm install --save-dev @chainlink/env-enc
// 设置密码: npx env-enc set-pw
// 设置具体值：npx env-enc set
// import * as envEnc from "@chainlink/env-enc";
// envEnc.config();
// console.log("deployed contract address is %s \n", process.env.DEPLOYED_CONTRACT_ADDRESS);

ts，引入某个包中的某个类型：
import type { NewTaskActionFunction } from 'hardhat/types/tasks';


要重新上链一个合约，需要将原本生成的编译文件删除，然后重新部署

在windows中安装vscode
linux终端打开项目，输入```code .```，就可以在vscode中打开项目

 使用ethers，只需要在hardhat.config.ts中的plugins改为
 plugins: [HardhatIgnitionEthersPlugin],
 导入： import HardhatIgnitionEthersPlugin from '@nomicfoundation/hardhat-ignition-ethers'

plugins: [hardhatToolboxViemPlugin],
plugins: [HardhatIgnitionEthersPlugin],
上面这两个只能用一个，且plugins: [hardhatToolboxViemPlugin],是默认的。

然后的区别是在```script/deployFundMe.ts```中```const { fundMe } = await connection.ignition.deploy(FundMeModule)```
返回值fundMe，调用其它函数的区别。
ethers参考：https://docs.ethers.org/v6/api/contract/   中BaseContract的方法，返回值就是BaseContract类型。

编译合约：
npx hradhat compile

使用keystore插件保存保密值
npx hardhat keystore set xxx
 
使用ignish部署合约，必须在ignish/modules文件夹中存放xx.ts文件
部署合约：
npx hardhat ignition deploy ignition/modules/xxx.ts
部署到指定网络，并验证（需要配置网络，参考https://hardhat.org/docs/learn-more/configuration-variables）：
 npx hardhat ignition deploy ignition/modules/fundMe.ts --network sepolia --verify
 验证已部署合约：
 npx hardhat ignition verify chain-11155111 ----network sepolia

使用hardhat scripts部署合约（无法验证原因：需要关键字--build-profile default）
npx hardhat run scripts/fundMeDp-hardhatScript.ts --network sepolia
或：
npx hardhat run --build-profile default scripts/fundMeDp-hardhatScript.ts --network sepolia 
或：
npx hardhat run --build-profile production .\scripts\fundMeDp-hardhatScript.ts --network sepolia
如果没有验证，可以使用：
npx hardhat verify --network sepolia --build-profile default 0xxxxx  200
或：
npx hardhat verify --network sepolia --build-profile production 0xxxxx  200
200是智能合约构造函数的参数

无法验证通过的原因：Using a different build profile. If you are using a different build profile than the one used for deployment, then the bytecode will be different, causing the verification to fail. Try using --build-profile with other profiles to verify your contract, beginning with default. You may also need to run hardhat build with the same build profile to generate the correct artifacts.
参考：https://hardhat.org/docs/learn-more/smart-contract-verification
https://hardhat.org/plugins/nomicfoundation-hardhat-verify#build-profiles-and-verification

使用view部署合约，自动验证
npx hardhat run scripts/fundMeDp-viem.ts --network sepolia
或
npx hardhat run --build-profile production scripts/fundMeDp-viem.ts --network sepolia
如果没有验证，可以使用：
npx hardhat verify --network sepolia --build-profile default 0xxxxx  200
或
npx hardhat verify --network sepolia --build-profile production 0xxxxx  200
200是智能合约构造函数的参数

使用ethers部署合约，自动验证
npx hardhat run scripts/fundMeDp-ethers.ts --network sepolia
如果没有验证，可以使用：
npx hardhat verify --network sepolia --build-profile default 0xxxxx  200
200是智能合约构造函数的参数