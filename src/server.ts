import "reflect-metadata";
import { app } from "./infrastructure/express";

app.listen(3000, () => {
  console.log("listening at http://localhost:3000/api/graphql ...");
});
