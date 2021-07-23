import { singleton } from "tsyringe";
import { readEnv } from "read-env";
import { z } from "zod";

enum ENVIRONMENT {
  local = "local",
  development = "dev",
  production = "prod",
}

const environment = z.string().default(ENVIRONMENT.local);
const airtable = z.object({
  baseId: z.string().default("BASE_ID"),
  apiKey: z.string().default("API_KEY"),
  apiTimeout: z.number().default(3000),
});

@singleton()
class Config {
  environment: z.infer<typeof environment>;
  airtable: z.infer<typeof airtable>;

  constructor() {
    console.log("process", process.env, readEnv("AIRTABLE"));
    this.environment = environment.parse(process.env.NODE_ENV);
    this.airtable = airtable.parse(readEnv("AIRTABLE"));
    console.log(this);
  }
}

export { Config, ENVIRONMENT };
