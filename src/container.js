const awilix = require("awilix");
const appointmentLogic = require("./domain/logic/appointment");
const appointmentRepository = require("./domain/repository/appointment");
const appointmentPatientRepository = require("./domain/repository/appointment-patient");
const patientRepository = require("./domain/repository/patient");
const serviceLogic = require("./domain/logic/service");
const serviceRepository = require("./domain/repository/service");

const container = awilix.createContainer({
  injectionMode: awilix.InjectionMode.PROXY,
});

// Appointment
container.register({
  appointmentLogicCreate: awilix.asFunction(
    appointmentLogic.AppointmentLogicCreate
  ),
  appointmentRepositoryCreate: awilix.asFunction(
    appointmentRepository.AppointmentRepositoryCreate
  ),
});

// Appointment Patient
container.register({
  appointmentPatientRepositoryCreateBulk: awilix.asFunction(
    appointmentPatientRepository.AppointmentPatientRepositoryCreateBulk
  ),
});

// Patient
container.register({
  patientRepositoryCreateBulk: awilix.asFunction(
    patientRepository.PatientRepositoryCreateBulk
  ),
  patientRepositorySearchByDocument: awilix.asFunction(
    patientRepository.PatientRepositorySearchByDocument
  ),
});

// Service
container.register({
  serviceLogicList: awilix.asFunction(serviceLogic.ServiceLogicList),
  serviceRepositoryList: awilix.asFunction(
    serviceRepository.ServiceRepositoryList
  ),
});

module.exports = { container };
