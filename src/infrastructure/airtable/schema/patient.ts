type RecordDraft = {
  fields: {
    document_type: string;
    document: string;
    first_name: string;
    last_name: string;
    email: string;
    phone: string;
    birthdate: string;
    address: string;
    address_number: string;
  };
};

type Record = RecordDraft & {
  id: string;
  createdTime: string;
};

type Patient<R extends Record | RecordDraft> = {
  records: R[];
};

export { Patient, Record, RecordDraft };
