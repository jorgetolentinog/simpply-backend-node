const { ServiceServiceList } = require("./list");

class ServiceService {
  constructor(opts) {
    this.list = ServiceServiceList(opts);
  }
}

module.exports = { ServiceService };
