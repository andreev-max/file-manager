import { OPERATION_FAILED } from "./constants.js";

export async function operationExecuter(operation, ...args) {
  try {
    await operation(...args);
    process.stdout.write("\n");
  } catch (e) {
    process.stdout.write(`${OPERATION_FAILED} \n \n`);
  }
}
