const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: path.join(__dirname, '..', './src/index.js'),
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '..', './src/index.html'),
    }),
    new CopyPlugin({
      patterns: [
        {
          from: 'public/',
          to: './public/',
          noErrorOnMissing: true,
        },
        { from: 'favicon.ico', to: './favicon.ico', noErrorOnMissing: true },
      ],
    }),
  ],
  output: {
    path: path.resolve(__dirname, '..', './build'),
    filename: '[contenthash].bundle.js',
  },
};
