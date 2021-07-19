function AppointmentServiceCreate({
  appointmentRepository,
  patientRepository,
  appointmentPatientRepository,
  yup,
}) {
  const schema = yup.object({
    date: yup.string().isodate().required(),
    serviceId: yup.string().required(),
    patients: yup
      .array()
      .of(
        yup.object({
          documentType: yup.string().required(),
          document: yup.string().required(),
          firstName: yup.string().required(),
          lastName: yup.string().required(),
          email: yup.string().email().required(),
          phone: yup.string().required(),
          birthdate: yup.string().isodate().required(),
          address: yup.string().required(),
          addressNumber: yup.string().required(),
        })
      )
      .min(1)
      .strict(),
  });

  return async (params) => {
    try {
      await schema.validate(params);

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
    } catch (err) {
      console.log("AppointmentServiceCreate error", err);
      throw new Error(`AppointmentServiceCreate: ${err.message}`);
    }
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
