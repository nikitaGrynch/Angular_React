const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
module.exports = {
  entry: {
    main: path.resolve(__dirname, "src_hw_22_03_23", "index2.js"),
  },
  output: {
    filename: "[name]_[contenthash]_bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "src_hw_22_03_23", "index.html"),
    }),
    new CleanWebpackPlugin(),
  ],
};
