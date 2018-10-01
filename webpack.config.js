const path = require('path');
const PackageFile = require("./package.json");

module.exports = {
  mode: "development",
  entry: path.resolve(__dirname, PackageFile.module),
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader"
      }
    ],
    strictExportPresence: true
  },
  output: {
    filename: path.basename(PackageFile.browser),
    path: path.resolve(__dirname, path.dirname(PackageFile.browser)),
    libraryTarget: "umd"
  },
  resolve: {
    modules: [path.join(__dirname, 'src'), "node_modules"]
  }
};