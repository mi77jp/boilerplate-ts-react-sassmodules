const path = require('path');

module.exports = {
  mode: "development",
  watch: true,
  entry: "./src/index.tsx",
  output: {
    filename: "bundle.js",
    path: __dirname + "/dist"
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json", ".css", ".scss"]
  },
  devtool: "source-map",
  module: {
    rules: [
      { test: /\.scss$/, use: [
        { loader: "style-loader" },
        {
          loader: "css-loader",
          options: {
            sourceMap: true
          },
          options: {
            modules: {
              localIdentName: "[name]-[local]-[hash:base64:5]"
            }
          }
        },
        {
          loader: "postcss-loader",
          options: {
            sourceMap: true,
            plugins: [ require("autoprefixer")() ]
          }
        },
        {
          loader: "sass-loader",
          options: {
            sourceMap: true
          }
        }
      ] },
      { test: /\.tsx?$/, loader: "babel-loader" },
      { test: /\.tsx?$/, loader: "ts-loader" },
      { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
    ]
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    host: "0.0.0.0",
    disableHostCheck: true,
    port: 3000,
    open: true,
    hot: true
  }
};
