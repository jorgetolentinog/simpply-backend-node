import { injectable } from "tsyringe";
import chalk from "chalk";
import { sep as pathSeparator } from "path";

@injectable()
class Logger {
  constructor() {}

  debug(...args: unknown[]) {
    this.log(chalk.green.bold("DEBUG"), ...args);
  }

  info(...args: unknown[]) {
    this.log(chalk.cyan.bold("INFO"), ...args);
  }

  error(...args: unknown[]) {
    this.log(chalk.red.bold("ERROR"), ...args);
  }

  private log(level: string, ...args: unknown[]) {
    const caller = this.getCaller();
    const params: unknown[] = [`[${level}]`, chalk.gray(`[${this.getTime()}]`)];

    if (caller && caller.at) {
      params.push(chalk.gray(`[${caller.at}]`));
    }

    console.log(...params.concat(args));
  }

  private getCaller() {
    const level = 4; // Ajustar si se agregan más capas
    const err = new Error();
    if (!err.stack) return null;

    const frames = err.stack.split("\n");
    if (frames.length < level) return null;

    const match = frames[level].match(/at (.+) \((.+)\)/);
    if (!match) return null;

    const at = match[1];
    const filePath = this.cleanFilePath(match[2]);

    if (at.indexOf("<anonymous>") >= 0) {
      return { at: null, filePath };
    }

    return { at, filePath };
  }

  private cleanFilePath(fileName: string): string {
    const cwdArray: string[] = process.cwd().split(pathSeparator);
    const filePath = Object.entries(fileName.split(pathSeparator))
      .reduce((cleanFileName: string, fileNamePart, index) => {
        if (fileNamePart[1] !== cwdArray[index]) {
          cleanFileName += pathSeparator + fileNamePart[1];
        }
        return cleanFileName;
      }, "")
      .substring(1);
    return filePath.split(":").slice(0, -1).join(":");
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
