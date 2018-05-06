const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const package = require('../package');
const entries = require('./entries');

module.exports = {
  entry: entries,
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets:['env', 'stage-0', 'react'],
            "env": {
              "development" : {
                "compact": false
              }
            }
          }
        }
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                minimize: process.env.NODE_ENV === 'production'
              }
            },
            {
              loader: 'sass-loader',
              options: {
                includePaths: ['src/popup']
              }
            }
          ]
        })
      }
    ]
  },
  plugins: [
    new webpack.optimize.ModuleConcatenationPlugin(),
    new ExtractTextPlugin({
      filename: "popup.css"
    }),
    new HtmlWebpackPlugin({
      title: package.name,
      filename: 'popup.html',
      chunks: ['popup'],
      template: 'templates/popup.html'
    })
  ]
};
