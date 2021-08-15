const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    entry: "./single-spa-config.js",
    mode: "development",
    output: {
        clean: true
    },

    plugins: [
        new HtmlWebpackPlugin()
    ]
}