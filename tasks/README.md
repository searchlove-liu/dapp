task,是在执行npx hardhat --help,展示的可执行的命令

在本文件夹中创建task，然后再hardhat.config.ts中引入，然后在hardhat.config.ts 插件中引入。fundMeDeploy，就是这么文件导出内容的别名。
import fundMeDeploy from "./tasks/deploy-FundMe.ts"，
const config: HardhatUserConfig = {
  plugins: [xxx,fundMeDeploy],
  xxx，
  }

这个task暂时没有测试，还不可以使用。

参考：https://github.com/wighawag/hardhat-deploy/blob/main/packages/hardhat-deploy/src/tasks/deploy.ts



