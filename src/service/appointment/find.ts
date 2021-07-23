import { injectable } from "tsyringe";
import { Logger } from "@/infrastructure/logger/logger";
import { AppointmentRepositoryFind } from "@/infrastructure/airtable/repository/appointment/find";
import { z } from "zod";

const schema = z.object({
  id: z.string().min(1),
});

type HandleInput = z.infer<typeof schema>;

@injectable()
class AppointmentServiceFind {
  constructor(
    private appointmentRepositoryFind: AppointmentRepositoryFind,
    private logger: Logger
  ) {}

  async handle(params: HandleInput) {
    schema.parse(params);
    const result = await this.appointmentRepositoryFind.handle(params);
    this.logger.debug("result", result);
    return result;
  }
}

export { AppointmentServiceFind };
