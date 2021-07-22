import { injectable } from "tsyringe";
import tracer, { Tracer } from "tracer";

@injectable()
class Logger {
  debug: (...args: any[]) => Tracer.LogOutput;

  constructor() {
    const logger = tracer.colorConsole({
      format:
        "{{timestamp}} <{{title}}> {{file}}:{{line}} ({{method}}) {{message}} ",
      dateformat: "HH:MM:ss",
    });

    this.debug = logger.debug;
  }
}

export { Logger };
