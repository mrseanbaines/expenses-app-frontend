const path = require('path');
const Dotenv = require('dotenv-webpack');

// Load environment variables from the `.env` file.
require('dotenv').config();

module.exports = {
  entry: ['babel-polyfill', path.resolve(__dirname, 'src')],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    port: process.env.SITE_PORT,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ['file-loader'],
      },
    ],
  },
  plugins: [new Dotenv()],
};
