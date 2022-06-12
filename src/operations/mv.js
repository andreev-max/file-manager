import { access, unlink } from "fs/promises";
import { createWriteStream, createReadStream } from "fs";
import path from "path";
import { pipeline } from "stream";

import { OPERATION_FAILED } from "../utils/constants.js";

export async function mv(args) {
  try {
    await access(path.join(process.cwd(), args[0]));
    const readStream = createReadStream(path.join(process.cwd(), args[0]), {
      encoding: "utf-8",
    });
    const writeStream = createWriteStream(
      path.join(process.cwd(), args[1], args[0])
    );

    pipeline(readStream, writeStream, async (err) => {
      if (err) {
        process.stdout.write(`${OPERATION_FAILED} \n`);
      } else {
        await unlink(path.join(process.cwd(), args[0]));
      }
    });
  } catch {
    process.stdout.write(`${OPERATION_FAILED} \n`);
  }
}
