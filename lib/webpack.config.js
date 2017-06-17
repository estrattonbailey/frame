const webpack = require('webpack')
const path = require('path')
const p = process.env.NODE_ENV === 'production'

module.exports = {
  devtool: 'cheap-module-source-map',
  entry: path.join(__dirname, 'app/index.js'),
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'index.js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        include: path.join(__dirname, 'app'),
        loaders: ['babel-loader', 'standard-loader']
      },
    ]
  },
  plugins: p ? [] : [
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    hot: true,
    contentBase: path.join(__dirname, 'public'),
    publicPath: '/',
    compress: true
  }
}
