import { injectable } from "tsyringe";

@injectable()
class Config {
  serverless = {
    isOffline: !!process.env.IS_OFFLINE,
  };
}

export { Config };
