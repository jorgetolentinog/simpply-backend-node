const { AppointmentSchema } = require("./schema");

function AppointmentServiceCreate({
  appointmentRepositoryCreate,
  appointmentPatientRepositoryCreateBulk,
  patientRepositoryCreateBulk,
  patientRepositorySearchByDocument,
}) {
  return async (params) => {
    params = await AppointmentSchema.validate(params);

    const patientsId = await getOrCreatePatients({
      patientRepositorySearchByDocument,
      patientRepositoryCreateBulk,
      patients: params.patients,
    });

    const appointment = await appointmentRepositoryCreate({});
    await appointmentPatientRepositoryCreateBulk(
      patientsId.map((patientId) => ({
        pk: "3",
        appointmentId: appointment.id,
        patientId: patientId,
      }))
    );

    return {
      id: appointment.id,
    };
  };
}

async function getOrCreatePatients({
  patientRepositorySearchByDocument,
  patientRepositoryCreateBulk,
  patients,
}) {
  const patientsId = [];
  const existingPatients = await patientRepositorySearchByDocument(
    patients.map((p) => ({
      document: p.document,
      documentType: p.documentType,
    }))
  );

  const patientsToCreate = [];
  for (let p of patients) {
    let exists = false;
    for (let ep of existingPatients) {
      if (p.document === ep.document && p.documentType === ep.documentType) {
        patientsId.push(ep.id);
        exists = true;
        break;
      }
    }

    if (!exists) {
      patientsToCreate.push(p);
    }
  }

  if (patientsToCreate.length > 0) {
    const newPatients = await patientRepositoryCreateBulk(patientsToCreate);
    for (let np of newPatients) {
      patientsId.push(np.id);
    }
  }
  return patientsId;
}

module.exports = { AppointmentServiceCreate };
