/* eslint-disable @typescript-eslint/no-var-requires */
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const APP_PATH = path.resolve(__dirname, 'src')

module.exports = {
  mode: 'development',
  entry: APP_PATH,

  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },

  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.jsx'],
    alias: {
      core: path.resolve(__dirname, './src/core/'),
      src: path.resolve(__dirname, './src/')
    }
  },

  module: {
    rules: [
      {
        test: /\.(ts)x?$/,
        exclude: [
          /dist/,
          /node_modules/,
          /\\.test\\.tsx?$/,
          /__tests__/,
          /typings/
        ],
        use: [{ loader: 'ts-loader' }]
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, './src/index.html')
    })
  ]
}
