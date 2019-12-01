const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './src/index.html',
  filename: 'index.html',
  inject: 'body'
})
<<<<<<< HEAD
const host = process.env.HOST || 'localhost'
=======
>>>>>>> inition webpack setup
module.exports = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'index_bundle.js'
  },
  module: {
    rules: [
      {
<<<<<<< HEAD
        test: /\.(scss|css)$/,
=======
        test: /\.scss$/,
>>>>>>> inition webpack setup
        loader: 'style-loader!css-loader!sass-loader'
      },
      {
        test: /\.(woff|woff2|ttf|otf|eot)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              outputPath: 'fonts'
            }
          }
        ]
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              outputPath: 'images'
            }
          }
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: "babel-loader"
      }, {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: "babel-loader"
      }
    ]
  },
<<<<<<< HEAD
  plugins: [HtmlWebpackPluginConfig],
  devServer: {
    contentBase: './src',
    compress: true,
    hot: true,
    open: true,
    host,
    port: 3000,
    publicPath: '/'
  }
=======
  plugins: [HtmlWebpackPluginConfig]
>>>>>>> inition webpack setup
}