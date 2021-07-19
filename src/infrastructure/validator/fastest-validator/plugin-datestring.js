function datestring(validator) {
  validator.messages["isodate"] =
    "The '{field}' field must be in the format: {expected}, value: {actual}";

  validator.add("isodate", function ({ schema, messages }, path, context) {
    const src = [];

    src.push(`
      if (typeof value !== "string") {
        ${this.makeError({ type: "string", actual: "value", messages })}
        return value;
      }
    `);

    const pattern = /^\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$/;
    src.push(`
      if (!${pattern.toString()}.test(value)) {
        ${this.makeError({
          type: "isodate",
          expected: '"YYYY-MM-DD"',
          actual: "value",
          messages,
        })}
      }
    `);

    src.push(`return value;`);

    return {
      sanitized: false,
      source: src.join("\n"),
    };
  });
}

module.exports = { datestring };
