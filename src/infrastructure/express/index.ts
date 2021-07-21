import express from "express";
import { graphqlHTTP } from "express-graphql";
import { json as bodyParserJSON } from "body-parser";
import { Schema } from "../graphql/schema";

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
  })
);

export { app };
