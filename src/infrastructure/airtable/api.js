const axios = require("axios");
const { axiosRequestLogger, axiosResponseLogger } = require("../logger/http");

const airtableAPI = axios.create({
  baseURL: "https://api.airtable.com/v0/appgUUt9aJtuOxtnD/",
  timeout: 3000,
  headers: {
    "Content-Type": "application/json",
    Authorization: "Bearer keyMxMQ7eexdbC70J",
  },
});

airtableAPI.interceptors.request.use(axiosRequestLogger);
airtableAPI.interceptors.response.use(axiosResponseLogger);

module.exports = { airtableAPI };
