const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const isModeDev = process.env.NODE_ENV === "development";
const filename = (ext) =>
  `[name]_${isModeDev ? "" : "[contenthash]_"}bundle.${ext}`;
module.exports = {
  entry: {
    main: path.resolve(__dirname, "src_hw_28_03_23", "index.js"),
    // main: path.resolve(__dirname, "src", "index.js"),
    // statistics: path.resolve(__dirname, "src", "statistics.js"),
  },
  output: {
    filename: filename("js"),
    path: path.resolve(__dirname, "dist"),
  },
  devtool: isModeDev ? "source-map" : false,
  devServer: {
    port: 4200,
  },
  optimization: {
    splitChunks: {
      chunks: "all",
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "src_hw_28_03_23", "index.html"),
      // template: path.resolve(__dirname, "src", "index.html"),
    }),
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin({
      patterns: [
        {
          // from: path.resolve(__dirname, "src", "favicon.ico"),
          // to: path.resolve(__dirname, "dist"),
          from: path.resolve(__dirname, "src_hw_28_03_23", "favicon.ico"),
          to: path.resolve(__dirname, "dist"),
        },
      ],
    }),
    new MiniCssExtractPlugin({
      filename: filename("css"),
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.less$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "less-loader"],
      },
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
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
        test: /\.(png|jpe?g|gif|ico|svg)$/,
        type: "asset/resource",
      },
      {
        test: /\.ttf$/,
        type: "asset/resource",
      },
    ],
  },
  resolve: {
    alias: {
      "@styles": path.resolve(__dirname, "src_hw_28_03_23", "styles"),
      "@assets": path.resolve(__dirname, "src_hw_28_03_23", "assets"),
      "@fonts": path.resolve(__dirname, "src_hw_28_03_23", "assets", "fonts"),
    },
  },
};
