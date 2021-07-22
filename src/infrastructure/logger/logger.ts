import { injectable } from "tsyringe";
import chalk from "chalk";

@injectable()
class Logger {
  private _tag: string | undefined = undefined;

  constructor() {}

  tag(tag: string) {
    this._tag = tag;
    return this;
  }

  debug(...args: unknown[]) {
    this.console(chalk.black.bgGray(" DEBUG "), ...args);
    this._tag = undefined;
  }

  error(...args: unknown[]) {
    this.console(chalk.white.bgRed(" ERROR "), ...args);
    this._tag = undefined;
  }

  private console(level: string, ...args: unknown[]) {
    let tag = this._tag || this.getMethod();

    const params: unknown[] = [`${level}`];
    if (tag && tag) {
      params.push(chalk.gray(`[${tag}]`));
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
