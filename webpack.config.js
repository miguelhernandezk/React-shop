const loader = require("html-loader");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports ={
    entry: "./src/index.js",
    output: {
        path: resolve(__dirname, "dist"),
        filename: "bundle.js"
    },
    resolve: {
        extensions: [".js", ".jsx"],
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                }
            },
            {
                test: /\.html$/,
                use: "html-loader",
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./public/index.html",
            filename: "./index.html"
        }),
    ]
}