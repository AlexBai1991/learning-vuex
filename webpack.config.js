'use strict';

var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: './src/js/index.js',
  output: {
    path: path.resolve(__dirname, './build')',
    publicPath: './build/',
    filename: '[name].js'
  },
  module: {
    loaders: [{
    }]
  },
  vue: {

  },
  devtool: 'source-map'
};
