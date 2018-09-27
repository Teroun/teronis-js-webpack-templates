const path = require('path');

module.exports = {
  mode: "development",
  entry: './src/index.js',
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
    filename: 'teronis-js-webpack-templates.js',
    path: path.resolve(__dirname, 'dist'),
    libraryTarget: "umd"
  },
  resolve: {
    modules: [path.join(__dirname, 'src'), "node_modules"]
  }
};