const path = require('path');
const HtmlCriticalWebpackPlugin = require('html-critical-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const BUILD_DIR = path.resolve(__dirname, './client/public/');
const APP_DIR = path.resolve(__dirname, './client');

module.exports = {
  mode: 'production',
  plugins: [
    new HtmlWebpackPlugin(),
    new MiniCssExtractPlugin(),
    new HtmlCriticalWebpackPlugin({
      base: path.resolve(__dirname, './client/public/'),
      src: 'main.html',
      dest: 'index.html',
      inline: true,
      minify: true,
      extract: true,
      width: 1920,
      height: 1080,
      penthouse: {
        blockJSRequests: false
      }
    })
  ],
  entry: ['@babel/polyfill', __dirname + '/client/src/index.js'],
  output: {
    filename: 'bundle.mjs',
    path: BUILD_DIR
  },
  watchOptions: {
    poll: true,
    ignored: /node_modules/
  },
  module: {
    rules: [
      {
        test: [/\.m?(js|jsx)$/],
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              [
                '@babel/preset-env',
                {
                  useBuiltIns: 'entry',
                  targets: {
                    browsers: [
                      'Chrome >= 60',
                      'Safari >= 10.1',
                      'iOS >= 10.3',
                      'Firefox >= 54',
                      'Edge >= 15'
                    ]
                  }
                }
              ]
            ]
          }
        }
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      },
      {
        test: /\.(woff|ttf|otf|eot|woff2|svg)$/i,
        loader: 'file-loader'
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  }
};
