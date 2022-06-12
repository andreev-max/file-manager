import { getOperation } from "./utils/getOperation.js";
import { operationExecuter } from "./utils/operationExecuter.js";

export async function handleInput(input) {
  const args = input.split(" ");
  const operation = getOperation(args[0]);
  await operationExecuter(operation, args.slice(1, args.length));
}
