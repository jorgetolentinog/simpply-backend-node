import express from "express";
import { GraphQLError } from "graphql";
import { graphqlHTTP } from "express-graphql";
import { json as bodyParserJSON } from "body-parser";
import { Schema } from "../graphql/schema";
import { ZodError } from "zod";

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
      let detail = undefined;
      let message = err.message;
      let stacktrace: string | undefined = err.stack;

      if (err.originalError instanceof ZodError) {
        const issue = err.originalError.issues[0];
        const issueAt = issue.path.join(".");
        message = `Validation Error: ${issue.message} at ${issueAt}`;
        stacktrace = undefined;
        detail = err.originalError.issues;
      }

      return {
        message,
        extensions: {
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
