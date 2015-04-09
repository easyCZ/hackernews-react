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

            { test: /\.js?$/, loaders: ['react-hot', 'babel'], include: path.join(__dirname, 'app') }

        ]
    }
};