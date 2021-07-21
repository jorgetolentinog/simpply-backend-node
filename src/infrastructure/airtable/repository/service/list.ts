import { injectable } from "tsyringe";
import { AirtableClient } from "../../client";
import { Service, Record } from "../../schema/service";

@injectable()
class ServiceRepositoryList {
  constructor(private client: AirtableClient) {}

  async handle() {
    const resp = await this.client.http.get<Service<Record>>(
      "service?view=Grid%20view"
    );

    return resp.data.records.map((o) => ({
      id: o.id,
      pk: o.fields.pk,
      name: o.fields.name,
      description: o.fields.description,
      price: o.fields.price,
      createdTime: o.createdTime,
    }));
  }
}

export { ServiceRepositoryList };
