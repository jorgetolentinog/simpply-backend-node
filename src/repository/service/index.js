const { ServiceRepositoryList } = require("./list");

class ServiceRepository {
  constructor(opts) {
    this.list = ServiceRepositoryList(opts);
  }
}

module.exports = { ServiceRepository };
