const yup = require("yup");

yup.addMethod(yup.string, "date", function () {
  return this.matches(/^\d{4}-\d{2}-\d{2}$/, "date format invalid");
});

module.exports = { yup };
