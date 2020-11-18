const VueLoaderPlugin = require('vue-loader/lib/plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: './src/main.js',
  devServer: {
    contentBase: './dist',
    port: 9000
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ],

  },
  devtool: 'inline-source-map',
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      title: "Webpack-Vue App",
    }),
    new VueLoaderPlugin()
  ],
}