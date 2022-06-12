import { rename, access } from "fs/promises";
import path from "path";

import { OPERATION_FAILED } from "../utils/constants.js";

export async function rn(args) {
  try {
    await access(path.join(process.cwd(), args[0]));
    await rename(
      path.join(process.cwd(), args[0]),
      path.join(process.cwd(), args[1])
    );
  } catch {
    process.stdout.write(`${OPERATION_FAILED} \n`);
  }
}
