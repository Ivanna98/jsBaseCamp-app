const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const APP_DIR = path.resolve(__dirname, "./src/");

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './src/index.html',
  filename: 'index.html',
  inject: 'body'
})

const host = process.env.HOST || 'localhost'

module.exports = {
  entry: './src/index.jsx',
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'index_bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(scss|css)$/,
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
        test: /\.(js|jsx)$/,
        include: APP_DIR,
        exclude: /node_modules/,
        use: "babel-loader"
      }
    ]
  },
  devServer: {
    contentBase: './src',
    compress: true,
    hot: true,
    open: true,
    host,
    port: 3000,
    publicPath: '/'
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  plugins: [HtmlWebpackPluginConfig]
}