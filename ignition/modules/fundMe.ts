import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";
import hre from "hardhat";
import { LOCK_TIME, DATAFEED_ADDR } from "./../../helper-hardhat-config.ts";

export default buildModule("FundMeModuleOne", (m) => {
  const fundMeFuture = m.contract("FundMe", [LOCK_TIME, DATAFEED_ADDR]);
  return { fundMeFuture };
});

// const FundMeModule = buildModule("FundMeModuleTwo", (m) => {
//   const fundme = m.contract("FundMe", [200]);

//   return { fundme };
// });

// it("should have named the rocket Saturn V", async function () {
//   const connection = await hre.network.connect();
//   const { fundMeFuture } = await connection.ignition.deploy(FundMeModule);
//   console.log("fundMe deployed to: ", fundMeFuture.target)
// });