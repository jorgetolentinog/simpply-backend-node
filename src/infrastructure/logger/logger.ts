import { Logger as TSLogger, ILogObject as TSILogObject } from "tslog";
import { injectable } from "tsyringe";

type TSLoggerLevel = (...args: unknown[]) => TSILogObject;

@injectable()
class Logger {
  debug: TSLoggerLevel;
  error: TSLoggerLevel;

  constructor() {
    const logger = new TSLogger({
      displayFilePath: "hidden",
    });

    this.debug = logger.debug.bind(logger);
    this.error = logger.error.bind(logger);
  }
}

export { Logger };
