const webpack = require("webpack");
const path = require("path");

const root = path.normalize(__dirname + "/.");
const config = {
  devtool: "cheap-module-eval-source-map",
  cache: true,
  resolve: {
    extensions: [".tsx", ".ts"],
    modules: ["node_modules"],
  },
  entry: {
    app: "./lib/index.ts",
  },
  output: {
    path: path.join(root, "build/"),
    publicPath: "/s/",
    filename: "[name].js",
    chunkFilename: "[name].js",
  },
  module: {
    rules: [
      {
        test: /\.d\.ts$/,
        exclude: /(node_modules)/,
        use: ["ignore-loader"],
      },
      {
        test: /\.tsx?$/,
        exclude: /(node_modules)/,
        use: ["ts-loader"],
      },
    ],
  },
};

module.exports = config;
