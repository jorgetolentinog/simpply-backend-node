import { injectable } from "tsyringe";
import { ServiceRepositoryList } from "@/infrastructure/airtable/repository/service/list";

@injectable()
class ServiceServiceList {
  constructor(private serviceRepositoryList: ServiceRepositoryList) {}

  async handle() {
    const result = await this.serviceRepositoryList.handle();
    return result;
  }
}

export { ServiceServiceList };
