const path = require("path");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const OUTPUT_DIR = "dist";

module.exports = {
  entry: "./src/index.tsx",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, OUTPUT_DIR)
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/env", "@babel/typescript"],
            plugins: [["@babel/transform-react-jsx", { pragma: "h" }]]
          }
        }
      }
    ]
  },
  resolve: {
    extensions: [".ts", ".tsx", ".json"]
  },
  plugins: [
    new CleanWebpackPlugin([OUTPUT_DIR]),
    new HtmlWebpackPlugin({
      template: "./public/index.html"
    })
  ],
  devtool: "eval-source-map"
};
