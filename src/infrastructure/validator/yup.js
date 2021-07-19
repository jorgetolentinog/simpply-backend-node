const yup = require("yup");
const dayjs = require("dayjs");

yup.addMethod(yup.string, "isodate", function (format = "YYYY-MM-DD") {
  return this.test({
    message: (info) => {
      return `${info.path} must match the following: ${format}`;
    },
    test: (value) => dayjs(value, format, true).isValid(),
  });
});

module.exports = { yup };
