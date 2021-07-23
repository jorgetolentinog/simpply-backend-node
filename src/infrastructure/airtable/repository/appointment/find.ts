import { Logger } from "@/infrastructure/logger/logger";
import { injectable } from "tsyringe";
import { AirtableClient } from "../../client";
import { Record } from "../../schema/appointment";

type HandleInput = {
  id: string;
};

type HandleOutput = Promise<{
  id: string;
  date: string;
  serviceId: string;
  createdTime: string;
}>;

@injectable()
class AppointmentRepositoryFind {
  constructor(private client: AirtableClient, private logger: Logger) {}

  async handle(params: HandleInput): HandleOutput {
    const resp = await this.client.http.get<Record>(`appointment/${params.id}`);
    this.logger.debug("resp.data", resp.data);
    return {
      id: resp.data.id,
      date: resp.data.fields.date,
      serviceId: resp.data.fields.service_id[0],
      createdTime: resp.data.createdTime,
    };
  }
}

export { AppointmentRepositoryFind };
