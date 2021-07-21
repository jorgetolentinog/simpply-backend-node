type RecordDraft = {
  fields: {
    appointment_id: string[];
    patient_id: string[];
  };
};

type Record = RecordDraft & {
  id: string;
  createdTime: string;
};

type AppointmentPatient<R extends Record | RecordDraft> = {
  records: R[];
};

export { AppointmentPatient, Record, RecordDraft };
