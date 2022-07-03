const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  mode: "development",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
  devServer: { static: "./dist" },
  devtool: "inline-source-map",
  plugins: [
    new HtmlWebpackPlugin({
      title: "webpack-ts-rc",
    }),
  ],
};
