const axios = require("axios");
const { debug } = require("../logger/debug")("airtable:api");

const airtableAPI = axios.create({
  baseURL: "https://api.airtable.com/v0/appgUUt9aJtuOxtnD/",
  timeout: 3000,
  headers: {
    "Content-Type": "application/json",
    Authorization: "Bearer keyMxMQ7eexdbC70J",
  },
});

airtableAPI.interceptors.request.use(function (config) {
  const method = config.method.toUpperCase();
  const url = `${config.baseURL}${config.url}`;
  const data = (config.data && JSON.stringify(config.data)) || "";
  debug(`[request ] ${method} ${url} ${data}`);
  return config;
});

airtableAPI.interceptors.response.use(function (response) {
  const method = response.request.method;
  const url = `${response.config.baseURL}${response.config.url}`;
  const status = response.status;
  const data = (response.data && JSON.stringify(response.data)) || "";
  debug(`[response] ${method} ${url} ${status} ${data}`);
  return response;
});

module.exports = { airtableAPI };
