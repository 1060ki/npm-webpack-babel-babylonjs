module.exports = {
  entry: './src/app.js',
  output: {
    path: __dirname+ '/build',
    filename: 'bundle.js',
  },
  module: {
    loaders: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel-loader'
        }
    ]
  },
  devServer: {
    contentBase: 'build',
    port: 8000
  },
};