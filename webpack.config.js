const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: "./src/index.ts",
  module: {
    rules: [{
      test: /\.ts$/,
      exclude: path.resolve(__dirname, "node_modules"),
      loader: "awesome-typescript-loader"
    }],
  },
  resolve: {
    modules: [
      __dirname,
      path.resolve(__dirname, "src"),
      "node_modules"
    ],
    extensions: ['.ts', '.js'],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: 'dist'
  },
  devServer: {
    contentBase: __dirname
  },
  devtool: "source-map"
};
