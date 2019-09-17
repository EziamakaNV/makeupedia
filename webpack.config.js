const HtmlWebPackPlugin = require('html-webpack-plugin');
const path = require('path');

const htmlWebpackPlugin = new HtmlWebPackPlugin({
  template: './src/client/index.html',
  filename: './index.html',
});

module.exports = {
  entry: {
    main: path.resolve(__dirname, './src/client/js/index.js'),
  },
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, './build'),
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
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              modules: true,
              importLoaders: 1,
              localIdentName: '[name]_[local]_[hash:base64]',
              sourceMap: true,
              minimize: true,
            },
          },
        ],
      },
    ],
  },
  plugins: [htmlWebpackPlugin],
};
