const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const { json: bodyParserJSON } = require("body-parser");
const { Schema } = require("../graphql/schema");

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

module.exports = { app };
