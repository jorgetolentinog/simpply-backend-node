const Validator = require("fastest-validator");

const dayjs = require("dayjs");
const validator = new Validator();

validator.add("format", function ({ schema, messages }, path, context) {
  const pattern = /^\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$/;
  const src = [];
  console.log("schema", schema);

  // if (schema.date) {
  //   if (schema.date === "YYYY-MM-DD") {
  src.push(
    `
    console.log('ok', value);
    if (!${pattern.toString()}.test(value)) {
      ${this.makeError({ type: "email", actual: "value", messages })}
    }
    `
  );
  //   }
  // }

  console.log("src", src);

  return {
    sanitized: false,
    source: src.join("\n"),
  };
});

module.exports = { validator };
