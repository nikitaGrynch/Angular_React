const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const isModeDev = process.env.NODE_ENV === "development";
const filename = (ext) =>
  `[name]_${isModeDev ? "" : "[contenthash]_"}bundle.${ext}`;
module.exports = {
  entry: {
    main: path.resolve(__dirname, "src_hw_27_03_23", "index.js"),
    //main: path.resolve(__dirname, "src", "index.js"),
    //statistics: path.resolve(__dirname, "src", "statistics.js"),
  },
  output: {
    filename: filename("js"),
    path: path.resolve(__dirname, "dist"),
  },
  devServer: {
    port: 4200,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "src_hw_27_03_23", "index.html"),
      //template: path.resolve(__dirname, "src", "index.html"),
    }),
    new CleanWebpackPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.csv$/,
        use: ["csv-loader"],
      },
      {
        test: /\.xml$/,
        use: ["xml-loader"],
      },
      {
        test: /\.png$/,
        type: "asset/resource",
      },
    ],
  },
};
