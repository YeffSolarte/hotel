'use strict';
var path = require('path'),
    webpack = require('webpack'),
    nodeModulesDir = path.resolve(__dirname, './node_modules');

//console.log('__dirname');
//console.log(__dirname);
var config = {
    context: __dirname,
    entry: {
        app : path.resolve(__dirname, "src/components/app.js"),
        vendors : [
            // 'angular',
            'angular-ui-bootstrap',
            'angular-animate',
            'angular-messages',
            'angular-base64-upload',
            'angular-sanitize',
            'angular-aria',
            'lodash',
            'angular-simple-logger',
            'angular-jwt',
            '@uirouter/angularjs',
            'angular-resource',
            'oclazyload'
        ]
    },
    output: {
        path: path.resolve(__dirname,"src/assets/js"),
        filename: "[name].bundle.js",
        publicPath: 'assets/js/'
    },
    devtool: 'source-map',
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: [nodeModulesDir],
                loader: "babel-loader"
            },
            {
                test: /\.html$/,
                loader: 'html',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                loader: 'style!css',
                exclude: /node_modules/
            },
            {
                test: /\.png/,
                loader: 'url?mimetype=image/png'
            },
            {
                test: /\.jpg/,
                loader: 'file-loader'
            },
            {
                test: /\.gif/,
                loader: 'file-loader'
            },
            {
                test: /[\/]angular\.js$/,
                loader: "exports?angular"
            },
            {
                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'url-loader'
            },
            {
                test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'url-loader'
            }
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js'),
        new webpack.optimize.DedupePlugin()
    ],
    externals: {
        "angular": "angular"
    }
};

module.exports = config;
