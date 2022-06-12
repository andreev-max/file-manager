import { INVALID_INPUT } from "../utils/constants.js";

export function operationFailed() {
  process.stdout.write(`${INVALID_INPUT} \n`);
}
