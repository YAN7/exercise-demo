const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); //通过 npm 安装
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const prod = require('./webpack.production.config');
const dev = require('./webpack.development.config');


const config = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: __dirname + '/test',
    filename: 'hehe.js',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader', options: { modules: true } }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({ template: './index.html' })
  ],
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        uglifyOptions: {
          compress: false
        }
      })
    ]
  },
}

module.exports = config;