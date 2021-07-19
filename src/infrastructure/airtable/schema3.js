function makeSchema3({ validator }) {
  const appointment = validator.compile({
    records: {
      type: "array",
      items: {
        $$type: "object",
        fields: {
          $$type: "object|strict",
          date: "string",
          service_id: "string[]",
        },
      },
    },
  });

  const appointmentPatient = validator.compile({
    records: {
      type: "array",
      items: {
        $$type: "object",
        fields: {
          $$type: "object|strict",
          appointment_id: "string[]",
          patient_id: "string[]",
        },
      },
    },
  });

  const patient = validator.compile({
    records: {
      type: "array",
      items: {
        $$type: "object",
        fields: {
          $$type: "object|strict",
          document_type: "string",
          document: "string",
          first_name: "string",
          last_name: "string",
          email: "string",
          phone: "string",
          birthdate: "string",
          address: "string",
          address_number: "string",
        },
      },
    },
  });

  return {
    appointment,
    appointmentPatient,
    patient,
  };
}

module.exports = { makeSchema3 };
