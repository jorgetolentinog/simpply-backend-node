function AppointmentServiceCreate({
  appointmentRepository,
  patientRepository,
  appointmentPatientRepository,
  validator,
}) {
  const check = validator.compile({
    date: "isodate",
    serviceId: "string",
    patients: {
      type: "array",
      items: {
        $$type: "object",
        documentType: "string",
        document: "string",
        firstName: "string",
        lastName: "string",
        email: "email",
        phone: "string",
        birthdate: "isodate",
        address: "string",
        addressNumber: "string",
      },
    },
  });

  return async (params) => {
    const valid = check(params);
    if (valid !== true) {
      throw new Error(valid[0].message);
    }

    const patientsId = await getOrCreatePatients({
      patientRepository,
      patients: params.patients,
    });

    const appointment = await appointmentRepository.create({
      date: params.date,
      serviceId: params.serviceId,
    });

    await appointmentPatientRepository.createBulk(
      patientsId.map((patientId) => ({
        appointmentId: appointment.id,
        patientId: patientId,
      }))
    );

    return {
      id: appointment.id,
    };
  };
}

async function getOrCreatePatients({ patientRepository, patients }) {
  const patientsId = [];
  const existingPatients = await patientRepository.searchByDocument(
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
    const newPatients = await patientRepository.createBulk(patientsToCreate);
    for (let np of newPatients) {
      patientsId.push(np.id);
    }
  }
  return patientsId;
}

module.exports = { AppointmentServiceCreate };
