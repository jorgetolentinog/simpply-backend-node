import { injectable } from "tsyringe";
import axios, { AxiosInstance } from "axios";

@injectable()
class Airtable {
  http: AxiosInstance;

  constructor() {
    this.http = this.httpInstanceCreate();
  }

  private httpInstanceCreate() {
    return axios.create({
      baseURL: "https://api.airtable.com/v0/appgUUt9aJtuOxtnD/",
      timeout: 3000,
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer keyMxMQ7eexdbC70J",
      },
    });
  }
}

export { Airtable };
