import readline from "readline";
import os from "os";
import { handleInput } from "./handleInput.js";
import process, { exit } from "process";

const readlineStream = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const userName =
  process.argv.slice(2).join("").replace("--username=", "") || "Dear user";

async function start() {
  process.chdir(os.homedir());
  process.stdout.write(`Welcome to the File Manager, ${userName}! \n \n`);
  process.stdout.write(`You are currently in ${process.cwd()}`);
  process.stdout.write("\n \n");

  readlineStream.on("line", async (input) => {
    if (input === ".exit") {
      exit();
    } else if (input) {
      await handleInput(input);
      process.stdout.write(`You are currently in ${process.cwd()} \n`);
    }
  });
}

process.on("exit", () => {
  process.stdout.write(`Thank you for using File Manager, ${userName}!`);
});

start();
