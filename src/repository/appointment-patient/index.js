const { AppointmentPatientRepositoryCreateBulk } = require("./create-bulk");

class AppointmentPatientRepository {
  constructor(opts) {
    this.createBulk = AppointmentPatientRepositoryCreateBulk(opts);
  }
}

module.exports = {
  AppointmentPatientRepository,
};
