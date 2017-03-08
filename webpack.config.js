var HtmlWebpackPlugin = require('html-webpack-plugin')
var HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
    template: __dirname + '/src/index.html',
    filename: 'index.html',
    inject: 'body'
})
module.exports = {
    entry: [
        './src/index.js'
    ],
    module: {
        rules: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: "babel-loader",
        }]
    },
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js'
    },
    plugins: [HtmlWebpackPluginConfig],
}