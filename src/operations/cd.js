import { OPERATION_FAILED } from "../utils/constants.js";

export function cd(args) {
  try {
    process.chdir(args[0]);
  } catch {
    process.stdout.write(`${OPERATION_FAILED} \n`);
  }
}
