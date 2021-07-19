const Validator = require("fastest-validator");
const { datestring } = require("./plugin-datestring");

const validator = new Validator();
validator.plugin(datestring);

module.exports = { validator };
