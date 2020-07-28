const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
  mode: 'none', 
  resolve: {
    extensions: ['.vue', '.js'],
  },
  entry: {
    main : path.resolve(__dirname, './src/main.js'),
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: './js/[name].js'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      // 資料夾的 `.js` 文件以及 `.vue` 文件中的 `<script>`
      {
        test: /\.js$/,
        exclude: path.join(__dirname, '/node_modules'),
        loader: 'babel-loader'
      },
      // 資料夾的 `.css` 文件以及 `.vue` 文件中的 `<style>`
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ]
      },
      { 
        test: /\.s(c|a)ss$/, 
        use: [
          'vue-style-loader', 
          'css-loader',
          'sass-loader'
        ] 
      },
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      inject: 'body',
      template: './src/index.html'
    })
  ]
};

module.exports = config;