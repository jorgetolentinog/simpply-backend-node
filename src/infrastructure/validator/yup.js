const yup = require("yup");
const dayjs = require("dayjs");

yup.addMethod(yup.string, "isodate", function () {
  const pattern = /^\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$/;
  return this.matches(pattern, {
    message: (params) => `${params.path} must match the following: YYYY-MM-DD`,
  });
});

module.exports = { yup };
