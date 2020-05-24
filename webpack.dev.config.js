/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const createStyledComponentsTransformer = require('typescript-plugin-styled-components')
  .default;
const styledComponentsTransformer = createStyledComponentsTransformer();

module.exports = {
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  entry: {
    app: path.resolve(__dirname, 'src/index.tsx'),
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].js',
    publicPath: 'http://localhost:9001/',
    chunkFilename: 'js/[id].[chunkhash].js',
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    open: true,
    port: 9001,
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.(js | jsx | tsx | ts)$/,
        use: ['babel-loader', 'eslint-loader'],
        exclude: /node_modules/,
      },
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              getCustomTransformers: () => ({
                before: [styledComponentsTransformer],
              }),
            },
          },
          { loader: 'eslint-loader' },
        ],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.jpg|png|gif|woff|eot|ttf|svg|mp4|webm$/,
        use: {
          loader: 'file-loader',
          options: {
            outputPath: 'assets/',
          },
        },
      },
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'source-map-loader',
      },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public/index.html'),
    }),
  ],
  node: {
    fs: 'empty',
    module: 'empty',
  },
};
