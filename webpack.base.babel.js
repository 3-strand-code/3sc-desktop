const path = require('path')
const webpack = require('webpack')

module.exports = {
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: ['babel'],
        exclude: /node_modules\/(?!stardust)/,
      },
      {
        test: /\.json$/,
        loaders: ['json'],
      },
      {
        test: /\.md$/,
        loaders: ['raw'],
      },
      {
        test: /\.s?css$/,
        loaders: ['style', 'css', 'sass'],
      },
      {
        test: /\.(eot|ttf|woff|woff2|svg|png)$/,
        loader: 'file',
      },
    ],
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    libraryTarget: 'commonjs2',
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
    packageMains: ['webpack', 'browser', 'web', 'browserify', ['jam', 'main'], 'main'],
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery',
    }),
  ],
  externals: [
    // put your node 3rd party libraries which can't be built with webpack here (mysql, mongodb, and so on..)
  ],
}
