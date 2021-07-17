const app = require("debug")("app");

module.exports = (namespace) => ({ debug: app.extend(namespace) });
