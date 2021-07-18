const { makeSchema } = require("./schema2");
const { http } = require("./http");

class Airtable {
  constructor({ yup }) {
    this.http = http;
    this.schema = makeSchema({ yup });
  }
}

module.exports = { Airtable };
