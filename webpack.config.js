
const path = require('path');
const fs = require('fs');
/* eslint-disable import/no-extraneous-dependencies */
const WebpackNotifierPlugin = require('webpack-notifier');

module.exports = {
  entry: fs.readdirSync(path.join(__dirname, './lambdas'))
    .filter(filename => /\.js$/.test(filename))
    .map((filename) => {
      const entry = {};
      entry[filename.replace('.js', '')] = ['babel-polyfill', path.join(
        __dirname,
        './lambdas/',
        filename
      )];
      return entry;
    })
    .reduce((finalObject, entry) => Object.assign(finalObject, entry), {}),
  output: {
    path: path.join(__dirname, 'dist'),
    library: '[name]',
    libraryTarget: 'commonjs2',
    filename: '[name].js',
  },
  target: 'node',
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['latest-minimal'],
        },
      },
      {
        test: /\.json$/,
        loader: 'json',
      },
    ],
  },
  plugins: [
    new WebpackNotifierPlugin(),
  ],
  devtool: '#source-map',
};
