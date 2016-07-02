/**
 * Created by PHE on 2016/7/2.
 */
module.exports = {
  entry:[
    './index.js'
  ],
  output: {
    path: __dirname + '/assets/',
    publicPath: "/assets/",
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        query: {
          presets: 'react'
        }
      },
    ]
  }
};