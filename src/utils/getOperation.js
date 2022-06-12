import { add } from "../operations/add.js";
import { cat } from "../operations/cat.js";
import { cd } from "../operations/cd.js";
import { compress } from "../operations/compress.js";
import { cp } from "../operations/cp.js";
import { decompress } from "../operations/decompress.js";
import { hash } from "../operations/hash.js";
import { ls } from "../operations/ls.js";
import { mv } from "../operations/mv.js";
import { operationFailed } from "../operations/operationFailed.js";
import { os } from "../operations/os.js";
import { rm } from "../operations/rm.js";
import { rn } from "../operations/rn.js";
import { up } from "../operations/up.js";

export function getOperation(command) {
  switch (command) {
    case "up":
      return up;
    case "cd":
      return cd;
    case "ls":
      return ls;
    case "cat":
      return cat;
    case "add":
      return add;
    case "rn":
      return rn;
    case "cp":
      return cp;
    case "mv":
      return mv;
    case "rm":
      return rm;
    case "hash":
      return hash;
    case "compress":
      return compress;
    case "decompress":
      return decompress;
      case "os":
      return os;
    default:
      return operationFailed;
  }
}
