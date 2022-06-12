import { OPERATION_FAILED } from "../utils/constants.js";

export function up() {
  try {
    process.chdir("../");
  } catch {
    process.stdout.write(`${OPERATION_FAILED}`);
  }
}
