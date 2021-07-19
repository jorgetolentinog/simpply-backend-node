const { AppointmentServiceCreate } = require("./create");

class AppointmentService {
  constructor(opts) {
    this.create = AppointmentServiceCreate(opts);
  }
}

module.exports = { AppointmentService };
