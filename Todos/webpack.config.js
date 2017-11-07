const webpack = require('webpack');

module.exports = {
  entry: __dirname + '/electron/index.ts',
  output: {
    filename: "index.js",
    path: __dirname + '/dist/',
    publicPath: '/dist/'
  },
  node: {
    __filename: false,
    __dirname: false
  },
  target: 'electron-main',

  // Enable sourcemaps for debugging webpack's output.
  // devtool: 'source-map',
  devtool: 'cheap-module-eval-source-map',

  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: ['.ts', '.tsx', '.js', '.json']
  },

  module: {
    rules: [{
        test: /\.tsx?$/,
        loader: "ts-loader"
      },

      // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
      {
        enforce: "pre",
        test: /\.js$/,
        loader: "source-map-loader"
      },
    ]
  }
}
