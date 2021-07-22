const path = require("path");
const slsw = require("serverless-webpack");

Object.keys(slsw.lib.entries).map((k) => {
  slsw.lib.entries[k] = ["./src/polyfill.ts", slsw.lib.entries[k]];
});

module.exports = {
  context: __dirname,
  mode: slsw.lib.webpack.isLocal ? "development" : "production",
  entry: slsw.lib.entries,
  devtool: slsw.lib.webpack.isLocal
    ? "eval-cheap-module-source-map"
    : "source-map",
  resolve: {
    extensions: [".ts", ".js", ".json"],
    symlinks: false,
    cacheWithContext: false,
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  output: {
    libraryTarget: "commonjs",
    path: path.join(__dirname, ".webpack"),
    filename: "[name].js",
  },
  target: "node",
  // externals: [nodeExternals()],
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: "ts-loader",
        options: {
          transpileOnly: true,
          experimentalWatchApi: true,
        },
      },
    ],
  },
  stats: "errors-only",
};
