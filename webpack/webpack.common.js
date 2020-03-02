// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require("path");

// eslint-disable-next-line no-undef
module.exports = {
  entry: "./src/assets/ts/index.ts",
  optimization: {
    splitChunks: {
      chunks: "all",
      name: true
    }
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [".tsx", ".ts"]
  },
  output: {
    path: path.resolve(__dirname, "../src/assets/js"),
    filename: "index.bundle.js"
  }
};
