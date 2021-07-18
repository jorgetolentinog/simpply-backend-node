const axios = require("axios");
const { axiosRequestLogger, axiosResponseLogger } = require("../logger/http");

const http = axios.create({
  baseURL: "https://api.airtable.com/v0/appgUUt9aJtuOxtnD/",
  timeout: 3000,
  headers: {
    "Content-Type": "application/json",
    Authorization: "Bearer keyMxMQ7eexdbC70J",
  },
});

http.interceptors.request.use(axiosRequestLogger);
http.interceptors.response.use(axiosResponseLogger);

module.exports = { http };
