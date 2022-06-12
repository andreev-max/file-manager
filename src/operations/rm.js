import { unlink } from "fs/promises";
import path from "path";

import { OPERATION_FAILED } from "../utils/constants.js";

export async function rm(args) {
  try {
    await unlink(path.join(process.cwd(), args[0]));
  } catch {
    process.stdout.write(`${OPERATION_FAILED} \n`);
  }
}
