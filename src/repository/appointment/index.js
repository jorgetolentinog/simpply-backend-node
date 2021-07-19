const { AppointmentRepositoryCreate } = require("./create");

class AppointmentRepository {
  constructor(opts) {
    this.create = AppointmentRepositoryCreate(opts);
  }
}

module.exports = {
  AppointmentRepository,
};
