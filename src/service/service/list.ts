import { injectable } from "tsyringe";
import { ServiceRepositoryList } from "@/infrastructure/airtable/repository/service/list";
import { Logger } from "@/infrastructure/logger/logger";

@injectable()
class ServiceServiceList {
  constructor(
    private serviceRepositoryList: ServiceRepositoryList,
    private logger: Logger
  ) {}

  async handle() {
    const result = await this.serviceRepositoryList.handle();
    this.logger.debug("result", result.length);
    return result;
  }
}

export { ServiceServiceList };
