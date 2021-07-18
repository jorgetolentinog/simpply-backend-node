const yup = require("yup");

yup.addMethod(yup.string, "length2", function (length, msg = "length2 error") {
  return this.test({
    name: "length",
    message: msg,
    test: (value) => value && value.toString().length === length,
  });
});

module.exports = { yup };
