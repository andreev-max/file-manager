import { createReadStream } from "fs";
import path from "path";
import { stdout } from "process";

import { OPERATION_FAILED } from "../utils/constants.js";

export function cat(args) {
  try {
    const readStream = createReadStream(path.join(process.cwd(), args[0]), {
      encoding: "utf-8",
    });

    readStream
      .on("error", () => process.stdout.write(`${OPERATION_FAILED} \n`))
      .pipe(stdout)
      .on("error", () => process.stdout.write(`${OPERATION_FAILED} \n`));
  } catch (e) {
    console.log(e);
    process.stdout.write(`${OPERATION_FAILED} \n`);
  }
}
