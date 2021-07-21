import "reflect-metadata";

const { app } = require("./infrastructure/express/app");

app.listen(3000, () => {
  console.log("listening at http://localhost:3000/api/graphql ...");
});
