function makeSchema3({ validator }) {
  const appointment = validator.compile({
    records: {
      type: "array",
      items: {
        type: "object",
        props: {
          fields: {
            type: "object",
            props: {
              date: "string",
              service_id: {
                type: "array",
                items: {
                  type: "string",
                },
              },
            },
          },
        },
      },
    },
  });

  return {
    appointment,
  };
}

module.exports = { makeSchema3 };
