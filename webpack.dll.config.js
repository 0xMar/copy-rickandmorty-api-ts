/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const webpack = require('webpack');
const TersetJSPlugin = require('terser-webpack-plugin');

module.exports = {
  entry: {
    modules: ['react', 'react-dom', 'react-apollo-hooks'],
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TersetJSPlugin({
        extractComments: true,
        parallel: true,
        terserOptions: {
          ecma: 6,
        },
      }),
    ],
  },
  output: {
    filename: 'js/[name].[hash].dll.js',
    chunkFilename: 'js/[id].[chunkhash].js',
    path: path.resolve(__dirname, 'dist'),
    library: '[name]',
  },
  plugins: [
    new webpack.DllPlugin({
      name: '[name]',
      path: path.join(__dirname, '[name]-manifest.json'),
    }),
  ],
};
