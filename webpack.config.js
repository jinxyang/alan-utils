const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: [
    'webpack-hot-middleware/client?path=/__what&timeout=20000&reload=true&quiet=true',
    './examples/index.jsx',
  ],
  output: {
    filename: 'index.js',
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              plugins: [require('react-refresh/babel')],
            },
          },
        ],
        exclude: /node_modules/,
      },
    ],
  },
  devtool: 'eval-cheap-module-source-map',
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new ReactRefreshWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './examples/index.html',
    }),
  ],
  stats: 'errors-only',
}
