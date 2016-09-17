var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: [
    'webpack-hot-middleware/client',
    './main.js'
  ],

  output: {
    path: __dirname,
    publicPath: '/react-flip-move/examples',
    filename: 'dist/bundle.js',
    sourceMapFilename: 'dist/bundle.map'
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],

  module: {
    loaders: [
      // JAVASCRIPT
      {
        test: /\.jsx?$/,
        loader: 'babel',
        exclude: /node_modules/
      },
      // SASS
      {
        test: /\.(scss|css)$/,
        loader: 'style!css!sass'
      },
      {
        test: /\.json$/,
        include: [
          path.resolve(__dirname, './routes.json'),
        ],
        loaders: [
          `babel-loader?${JSON.stringify({
            "presets": [
              "react",
              "es2015",
              "stage-1"
            ],
            "plugins": [
              "transform-runtime"
            ]
          })}`,
          path.resolve(__dirname, './utils/routes-loader.js'),
        ],
      },
    ]
  }
}
