/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const webpack = require('webpack');
const TersetJSPlugin = require('terser-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin;

module.exports = {
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  entry: {
    app: path.resolve(__dirname, 'src/index.tsx'),
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].[hash].js',
    publicPath: 'https://vigilant-lovelace-6f532b.netlify.app/',
    chunkFilename: 'js/[id].[chunkhash].js',
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
      new OptimizeCSSAssetsPlugin(),
    ],
  },
  module: {
    rules: [
      {
        test: /\.(js | jsx | tsx | ts)$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(graphql|gql)$/,
        loader: 'graphql-tag/loader',
        exclude: /node_modules/,
      },
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        loader: 'ts-loader',
        options: {
          getCustomTransformers: path.join(__dirname, 'transformer.js'),
        },
      },
      // {
      //   test: /\.css$/,
      //   use: [
      //     {
      //       loader: MiniCssExtractPlugin.loader,
      //     },
      //     'css-loader',
      //   ],
      // },
      // {
      //   test: /\.jpg|png|gif|woff|eot|ttf|svg|mp4|webm$/,
      //   use: {
      //     loader: 'url-loader',
      //     options: {
      //       limit: 1000,
      //       name: '[hash].[ext]',
      //       outputPath: 'assets',
      //     },
      //   },
      // },
    ],
  },
  plugins: [
    new BundleAnalyzerPlugin(),
    // new MiniCssExtractPlugin({
    //   filename: 'css/[name].[hash].css',
    //   chunkFilename: 'css/[id].[hash].css',
    // }),
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: ['**/app.*'],
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public/index.html'),
    }),
    new webpack.DllReferencePlugin({
      manifest: require('./modules-manifest.json'),
    }),
    new AddAssetHtmlPlugin({
      filepath: path.resolve(__dirname, 'dist/js/*.dll.js'),
      outputPath: 'js',
      publicPath: 'https://vigilant-lovelace-6f532b.netlify.app/js',
    }),
  ],
};
