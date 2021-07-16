const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const { json: bodyParserJSON } = require("body-parser");
const {
  default: graphqlIDE,
} = require("graphql-playground-middleware-express");
const { Schema } = require("../graphql/schema");

const app = express();
app.disable("x-powered-by");
app.use(bodyParserJSON());

app.get(
  "/api/graphql",
  graphqlIDE({
    endpoint: "/api/graphql",
    settings: {
      "schema.polling.enable": false,
    },
  })
);

app.post("/api/graphql", graphqlHTTP({ schema: Schema }));

module.exports = { app };
