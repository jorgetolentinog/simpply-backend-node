const { makeSchema } = require("./schema");
const { http } = require("./http");

class Airtable {
  constructor(opts) {
    this.http = http;
    this.schema = makeSchema(opts);
  }
}

module.exports = { Airtable };
