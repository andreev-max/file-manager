import { createBrotliDecompress } from "zlib";
import { pipeline } from "stream";
import { createWriteStream, createReadStream } from "fs";
import path from "path";

import { OPERATION_FAILED } from "../utils/constants.js";

export function decompress(args) {
  try {
    const brotli = createBrotliDecompress();
    const source = createReadStream(path.join(process.cwd(), args[0]));
    const destination = createWriteStream(path.join(process.cwd(), args[1]));

    pipeline(source, brotli, destination, (err) => {
      if (err) {
        process.stdout.write(`${OPERATION_FAILED} \n`);
      }
    });
  } catch {
    process.stdout.write(`${OPERATION_FAILED} \n`);
  }
}
