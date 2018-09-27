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
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  },
  output: {
    filename: 'teronis-js-event-dispatcher.js',
    path: path.resolve(__dirname, 'dist')
  },
  resolve: {
    modules: [path.join(__dirname, 'src'), "node_modules"]
  }
};