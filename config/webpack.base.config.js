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
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              'env', 'stage-0', 'react'
            ],
            env: {
              "development": {
                "compact": false
              }
            },
            plugins: [
              [
                "import", {
                  "libraryName": "antd",
                  "style": true
                }
              ]
            ]
          }
        }
      }, {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                minimize: process.env.NODE_ENV === 'production'
              }
            }, {
              loader: 'sass-loader',
              options: {
                includePaths: ['src/popup']
              }
            }
          ]
        })
      }, {
        test: /\.less$/,
        use: [
          {
            loader: "style-loader"
          }, {
            loader: "css-loader"
          }, {
            loader: "less-loader",
            options: {
              javascriptEnabled: true
            }
          }
        ]
      }, {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader"
          }, {
            loader: "css-loader"
          }
        ]
      }, {
        test: /\.(png|jpg|svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new webpack
      .optimize
      .ModuleConcatenationPlugin(),
    new ExtractTextPlugin({filename: "popup.css"}),
    new HtmlWebpackPlugin({title: package.name, filename: 'popup.html', chunks: ['popup'], template: 'templates/popup.html'})
  ]
};
