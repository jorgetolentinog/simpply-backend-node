const { makeSchema } = require("./schema");
const { http } = require("./http");

class Airtable {
  constructor({ yup }) {
    this.http = http;
    this.schema = makeSchema({ yup });
  }
}

module.exports = { Airtable };
