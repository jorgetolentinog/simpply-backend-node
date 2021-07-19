const { PatientRepositoryCreateBulk } = require("./create-bulk");
const { PatientRepositorySearchByDocument } = require("./search-by-document");

class PatientRepository {
  constructor(opts) {
    this.createBulk = PatientRepositoryCreateBulk(opts);
    this.searchByDocument = PatientRepositorySearchByDocument(opts);
  }
}

module.exports = {
  PatientRepository,
};
