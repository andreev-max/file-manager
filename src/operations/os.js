import { EOL, cpus, homedir, userInfo, arch } from "os";

import { OPERATION_FAILED } from "../utils/constants.js";

export function os(args) {
  try {
    let result;
    switch (args[0]) {
      case "--EOL":
        result = `Your EOL: ${EOL}`;
        break;
      case "--cpus":
        result = getCpusInfo();
        break;
      case "--homedir":
        result = homedir();
        break;
      case "--username":
        result = userInfo().username;
        break;
      case "--architecture":
        result = arch();
        break;
      default:
        throw new Error();
    }

    process.stdout.write(result);
    process.stdout.write("\n");
  } catch {
    process.stdout.write(`${OPERATION_FAILED} \n`);
  }
}

function getCpusInfo() {
  const CPUS = cpus();
  const overallAmount = `Overall amount of CPUS: ${CPUS.length}`;
  const cpusInfo = CPUS.map((cpu, index) => {
    return `${index + 1} CPU info: ${cpu.model}, speed: ${cpu.speed}`;
  });
  return `${overallAmount}; \n${cpusInfo.join("\n")}`;
}
