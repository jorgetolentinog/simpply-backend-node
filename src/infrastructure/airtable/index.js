const { makeSchema } = require("./schema");
const { makeSchema3 } = require("./schema3");
const { http } = require("./http");

class Airtable {
  constructor(opts) {
    this.http = http;
    this.check = makeSchema3(opts);
  }
}

module.exports = { Airtable };
