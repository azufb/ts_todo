const path = require('path');
const { VanillaExtractPlugin } = require('@vanilla-extract/webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    plugins: [
      new VanillaExtractPlugin(),
      new MiniCssExtractPlugin(),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '..', './src/index.html')
        })
    ],
    entry: path.resolve(__dirname, '..', './src/index.tsx'),
    output: {
      path: path.resolve(__dirname, '..', './build'),
      filename: "bundle.js",
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          exclude: /node_modules/,
          use: "babel-loader",
        },
        {
          test: /\.vanilla\.css$/i,
          use: [
            MiniCssExtractPlugin.loader,
            {
              loader: require.resolve('css-loader'),
              options: {
                url: false
              }
            }
          ]
        }
      ],
    },
    resolve: {
      extensions: [".ts", ".tsx", ".js", ".json"],
    },
    target: ["web", "es5"],
};