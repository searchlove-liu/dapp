import { promises } from "dns";

async function test1(): Promise<any> {
    // throw new Error('Something bad happened');
    return "seccess"
}

function safeExecute(task: () => Promise<any>) {
    try {
        return task();
    } catch (error) {
        console.error(error);
        return null;
    }
}

async function main() {
    const result = safeExecute(test1);
    console.log(result);
}
main();                                                                                     