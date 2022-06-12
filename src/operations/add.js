import { access } from "fs/promises";
import { createWriteStream } from "fs";
import path from "path";

import { OPERATION_FAILED } from "../utils/constants.js";

export async function add(args) {
  try {
    await access(path.join(process.cwd(), args[0]));
  } catch {
    try {
      const stream = createWriteStream(path.join(process.cwd(), args[0]));
      stream.end();
    } catch {
      process.stdout.write(`${OPERATION_FAILED}`);
    }
  }
}
