import { injectable } from "tsyringe";
import chalk from "chalk";

@injectable()
class Logger {
  constructor() {}

  debug(...args: unknown[]) {
    this.console(chalk.black.bgGray(" DEBUG "), ...args);
  }

  error(...args: unknown[]) {
    this.console(chalk.white.bgRed(" ERROR "), ...args);
  }

  private console(level: string, ...args: unknown[]) {
    const method = this.getMethod();

    const params: unknown[] = [`${level}`];
    if (method && method) {
      params.push(chalk.gray(`[${method}]`));
    }

    console.log(...params.concat(args));
  }

  private getMethod() {
    const stackIndex = 4; // Ajustar si se agregan más capas
    const err = new Error();
    if (!err.stack) return null;

    const frames = err.stack.split("\n");
    if (frames.length < stackIndex) return null;

    const match = frames[stackIndex].match(/at (.+) \(.+\)/);
    if (!match) return null;

    const method = match[1];
    return method;
  }
}

export { Logger };
