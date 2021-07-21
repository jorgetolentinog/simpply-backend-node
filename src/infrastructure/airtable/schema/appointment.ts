type RecordDraft = {
  fields: {
    date: string;
    service_id: string[];
  };
};

type Record = RecordDraft & {
  id: string;
  createdTime: string;
};

type Appointment<R extends Record | RecordDraft> = {
  records: R[];
};

export { Appointment, Record, RecordDraft };
