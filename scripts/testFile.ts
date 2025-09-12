import { error } from "console";
import { networkConfig } from "./../helper-hardhat-config.ts"

function returnError(): string {
    let e: string = "alidj";
    if (networkConfig.get(e) as undefined === undefined) {
        let errorData = "The network  is\"" + e + "\"" + "not defined in your networks config"
        throw new Error(errorData)
    } else {
        return networkConfig.get(e) as string
    }
};

try {
    console.log("dataFeedAddr :", returnError())
} catch (error) {
    console.log(error)
    process.exit();
}

console.log("the program did not exit")
