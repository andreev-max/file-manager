import { readdir } from "fs/promises";

import { OPERATION_FAILED } from "../utils/constants.js";

export async function ls() {
  try {
    const content = await readdir(process.cwd());
    console.log(content);
  } catch {
    process.stdout.write(`${OPERATION_FAILED} \n \n`);
  }
}
