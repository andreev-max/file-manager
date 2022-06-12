import { access, unlink } from "fs/promises";
import path from "path";

import { OPERATION_FAILED } from "../utils/constants.js";

export async function mv(args) {
  try {
    await access(path.join(process.cwd(), args[0]));
    const readStream = createReadStream(path.join(process.cwd(), args[0]), {
      encoding: "utf-8",
    });
    const writeStream = createWriteStream(path.join(process.cwd(), args[1]));

    await readStream.pipe(writeStream);

    await unlink(path.join(process.cwd(), args[0]));
  } catch {
    process.stdout.write(`${OPERATION_FAILED} \n`);
  }
}
