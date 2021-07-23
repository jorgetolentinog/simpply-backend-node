import express from "express";
import { container } from "tsyringe";
import { GraphQLError } from "graphql";
import { graphqlHTTP } from "express-graphql";
import { json as bodyParserJSON } from "body-parser";
import { ZodError } from "zod";
import { Schema } from "../graphql/schema";
import { Logger } from "../logger/logger";

const app = express();
app.disable("x-powered-by");
app.use(bodyParserJSON());

app.use(
  "/api/graphql",
  graphqlHTTP({
    schema: Schema,
    graphiql: {
      headerEditorEnabled: true,
    },
    customFormatErrorFn: (err: GraphQLError) => {
      const logger = container.resolve(Logger);
      let detail = undefined;
      let reason = "error";
      let message = err.message;
      let stacktrace: string | undefined = err.stack;

      if (err.originalError instanceof ZodError) {
        const issue = err.originalError.issues[0];
        const issueAt = issue.path.join(".");
        reason = "validation";
        message = `Validation Error: ${issue.message} in ${issueAt}`;
        stacktrace = undefined;
        detail = err.originalError.issues;
      }

      if (reason === "error") {
        logger.tag("GraphQL").error(err.originalError);
      }

      return {
        message,
        extensions: {
          reason,
          detail,
          stacktrace,
        },
        path: err.path,
        locations: err.locations,
      };
    },
  })
);

export { app };
