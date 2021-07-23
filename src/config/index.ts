import { injectable } from "tsyringe";

@injectable()
class Config {
  serverless = {
    isOffline: !!process.env.IS_OFFLINE,
  };

  airtable = {
    baseURL: "https://api.airtable.com/v0/appgUUt9aJtuOxtnD/",
    apiKey: "keyMxMQ7eexdbC70J",
    timeout: 3000,
  }
}

export { Config };
