const { jsWithTs: tsjPreset } = require("ts-jest/presets");
const { pathsToModuleNameMapper } = require("ts-jest/utils");
const { compilerOptions } = require("./tsconfig");

module.exports = {
  testEnvironment: "node",
  transform: {
    ...tsjPreset.transform,
  },
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
    prefix: __dirname,
  }),
  setupFiles: ["./test/setup.ts"],
};
