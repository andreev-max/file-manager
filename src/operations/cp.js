import { access } from "fs/promises";
import { createWriteStream, createReadStream } from "fs";
import path from "path";

import { OPERATION_FAILED } from "../utils/constants.js";

export async function cp(args) {
  try {
    await access(path.join(process.cwd(), args[0]));

    const readStream = createReadStream(path.join(process.cwd(), args[0]), {
      encoding: "utf-8",
    });
    const writeStream = createWriteStream(path.join(process.cwd(), args[1]));

    readStream.pipe(writeStream);
  } catch {
    process.stdout.write(`${OPERATION_FAILED} \n`);
  }
}
