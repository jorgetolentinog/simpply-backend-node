// import "reflect-metadata";
import serverless from "serverless-http";
import { app } from "../express/api";

export const handler = serverless(app);
