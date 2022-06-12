import { createReadStream } from "fs";
import path from "path";

export function cat(args) {
  const stream = createReadStream(path.join(process.cwd(), args[0]), {
    encoding: "utf-8",
  });

  stream.on("data", (chunk) => {
    process.stdout.write(chunk);
  });
}
