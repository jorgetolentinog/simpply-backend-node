import { injectable } from "tsyringe";
import axios, { AxiosInstance } from "axios";
import { Config } from "@/config";

@injectable()
class AirtableClient {
  http: AxiosInstance;

  constructor(private config: Config) {
    this.http = this.getInstance();
  }

  private getInstance() {
    return axios.create({
      baseURL: this.config.airtable.baseURL,
      timeout: this.config.airtable.timeout,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.config.airtable.apiKey}`,
      },
    });
  }
}

export { AirtableClient };
