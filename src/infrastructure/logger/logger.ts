import { injectable } from "tsyringe";
import chalk from "chalk";

@injectable()
class Logger {
  constructor() {}

  debug(...args: unknown[]) {
    this.log(chalk.yellow.bold("DEBUG"), ...args);
  }

  error(...args: unknown[]) {
    this.log(chalk.red.bold("ERROR"), ...args);
  }

  private log(level: string, ...args: unknown[]) {
    const caller = this.getCaller();
    if (!caller) {
      console.log(...args);
      return;
    }

    console.log(
      `[${level}]`,
      chalk.gray(`[${this.getTime()}]`),
      chalk.gray(`[${caller.at}]`),
      ...args
    );
  }

  private getCaller() {
    const level = 4; // Ajustar si se agregan más capas
    const err = new Error();
    if (!err.stack) return null;

    const frames = err.stack.split("\n");
    if (frames.length < level) return null;

    const match = frames[level].match(/at (.+) \((.+)\)/);
    if (!match) {
      return null;
    }

    const at = match[1];
    const file = match[2];
    return { at, file };
  }

  private getTime() {
    const d = new Date();
    const h = String(d.getHours()).padStart(2, "0");
    const m = String(d.getMinutes()).padStart(2, "0");
    const s = String(d.getSeconds()).padStart(2, "0");
    return `${h}:${m}:${s}`;
  }
}

export { Logger };
