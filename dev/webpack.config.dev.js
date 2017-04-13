const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
  entry: './dev/index-dev.js',
  output: {
    path: path.resolve(__dirname + '/../dist'),
    filename: 'bundle-temp.js'
  },
  devtool: 'eval-source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'React Starter Distributable',
      template: './dev/index.html'
    })
  ]
};

module.exports = config;
