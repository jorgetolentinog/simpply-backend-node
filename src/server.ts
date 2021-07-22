import "reflect-metadata";
import { container } from "tsyringe";
import { app } from "./infrastructure/express";
import { Logger } from "./infrastructure/logger/logger";

const logger = container.resolve(Logger);

app.listen(3000, () => {
  logger.info("listening at http://localhost:3000/api/graphql ...");
});
