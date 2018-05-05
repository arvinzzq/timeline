const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
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
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  plugins: [
    new webpack.optimize.ModuleConcatenationPlugin(),
    new HtmlWebpackPlugin({
      title: package.name,
      filename: 'popup.html',
      chunks: ['popup'],
      template: 'templates/popup.html'
    })
  ]
};
