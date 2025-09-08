import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";
import hre from "hardhat";

export default buildModule("FundMeModuleOne", (m) => {
  const fundMeFuture = m.contract("FundMe", [200]);
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