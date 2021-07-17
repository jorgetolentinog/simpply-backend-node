const { debug } = require("./debug")("http");

const axiosRequestLogger = (config) => {
  const method = config.method.toUpperCase();
  const url = `${config.baseURL}${config.url}`;
  const data = (config.data && JSON.stringify(config.data)) || "";
  debug(`[request ] ${method} ${url} ${data}`);
  return config;
};

const axiosResponseLogger = (response) => {
  const method = response.request.method;
  const url = `${response.config.baseURL}${response.config.url}`;
  const status = response.status;
  const data = (response.data && JSON.stringify(response.data)) || "";
  debug(`[response] ${method} ${url} ${status} ${data}`);
  return response;
};

module.exports = { axiosRequestLogger, axiosResponseLogger };
