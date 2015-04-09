var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin')


module.exports = {
    entry: [
        'webpack/hot/dev-server',
        path.resolve(__dirname, 'app/main.js')
    ],
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js',
    },

    plugins: [

        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new HtmlWebpackPlugin({
            template: 'app/index.html',
            title: 'Hacker News Reader - React JS'
        })

    ],

    module: {

        loaders: [

            {
                test: /\.js?$/,
                loader: 'babel',
                exclude: /node_modules/,
            },

            {
                test: /\.scss$/,
                loader: "style!css!sass?outputStyle=expanded&" +
                    "includePaths[]=" + (path.resolve(__dirname, "./bower_components")) + "&" +
                    "includePaths[]=" + (path.resolve(__dirname, "./node_modules"))
            },

            {
                test: /\.woff|.ttf|.svg|.eot$/,
                loader: 'url?limit=100000'
            }

        ]
    }
};