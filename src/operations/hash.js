import { createHash } from "crypto";
import path from "path";
import { createReadStream } from "fs";

import { OPERATION_FAILED } from "../utils/constants.js";

export function hash(args) {
  try {
    const hash = createHash("sha256");
    const input = createReadStream(path.join(process.cwd(), args[0]));

    input
      .on("error", () => process.stdout.write(`${OPERATION_FAILED} \n`))
      .pipe(hash)
      .on("error", () => process.stdout.write(`${OPERATION_FAILED} \n`))
      .setEncoding("hex")
      .pipe(process.stdout)
      .on("error", () => process.stdout.write(`${OPERATION_FAILED} \n`));
  } catch {
    process.stdout.write(`${OPERATION_FAILED} \n`);
  }
}
