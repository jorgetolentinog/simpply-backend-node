const awilix = require("awilix");
const appointmentLogic = require("./core/logic/appointment");
const appointmentRepository = require("./core/repository/appointment");
const appointmentPatientRepository = require("./core/repository/appointment-patient");
const patientRepository = require("./core/repository/patient");

const container = awilix.createContainer({
  injectionMode: awilix.InjectionMode.PROXY,
});

container.register({
  // Appointment Service
  // -------------------------------------------
  appointmentLogicCreate: awilix.asFunction(
    appointmentLogic.AppointmentLogicCreate
  ),

  // Appointment Repository
  // -------------------------------------------
  appointmentRepositoryCreate: awilix.asFunction(
    appointmentRepository.AppointmentRepositoryCreate
  ),

  // Appointment Patient Repository
  // -------------------------------------------
  appointmentPatientRepositoryCreateBulk: awilix.asFunction(
    appointmentPatientRepository.AppointmentPatientRepositoryCreateBulk
  ),

  // Patient Repository
  // -------------------------------------------
  patientRepositoryCreateBulk: awilix.asFunction(
    patientRepository.PatientRepositoryCreateBulk
  ),
  patientRepositorySearchByDocument: awilix.asFunction(
    patientRepository.PatientRepositorySearchByDocument
  ),
});

module.exports = { container };
