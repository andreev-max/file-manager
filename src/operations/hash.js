import { createHash } from "crypto";
import path from "path";
import { createReadStream } from "fs";

import { OPERATION_FAILED } from "../utils/constants.js";

export function hash(args) {
  try {
    const hash = createHash("sha256");
    const input = createReadStream(path.join(process.cwd(), args[0]));
    input.pipe(hash).setEncoding("hex").pipe(process.stdout);
  } catch {
    process.stdout.write(`${OPERATION_FAILED} \n`);
  }
}
