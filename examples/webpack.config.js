var path = require('path');

module.exports = {
  entry: './app.js',
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          'babel-loader',
        ]
      },
      {
        test: /\.css$/,
        loaders: [
          'style-loader',
          'css-loader'
        ],
      },
    ]
  },

  output: {
    path: path.join(__dirname, '/build/'),
    filename: 'app.js'
  },

  devServer: {
    contentBase: './'
  }
};
