var envConfig = require('../config/env');
var webpack = require('webpack');
var htmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var env = process.env.NODE_ENV;
var cssSourceMapDev = (env === 'development' && envConfig.dev.cssSourceMap);
var cssSourceMapProd = ((env === 'production' || env === 'beta') && envConfig.build.productionSourceMap);
var useCssSourceMap = cssSourceMapDev || cssSourceMapProd;

var utils = require('./utils');
var fullPath = utils.fullPath;
var ROOT_PATH = fullPath('../');
var SRC_PATH = ROOT_PATH + '/src';
var DIST_PATH = ROOT_PATH + '/dist';
var NODE_MODULES_PATH = ROOT_PATH + "/node_modules";

var config = {
    entry: {
        index: [
            './src/apps/index.js'
        ],
        lib: [
            'vue',
            'vue-router'
        ]
    },
    output: {
        path: DIST_PATH,
        filename: '[name]_[hash:8].js',
        chunkFilename: '[name]_[hash:8].chunk.js'
    },
    resolve: {
        extensions: ['', '.js', '.vue'],
        alias: {
            'vue': NODE_MODULES_PATH + '/vue/dist/vue.js',
            'vue-router': NODE_MODULES_PATH + '/vue-router/dist/vue-router.js'
        }
    },
    module: {
        loaders: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            }, {
                test: /\.json$/,
                loader: "json-loader"
            }
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin("lib", "lib.bundle_[hash:8].js"),
        new htmlWebpackPlugin({
            filename: 'index.html',
            template: SRC_PATH + '/apps/index.html',
            inject: true
        }),
        new ExtractTextPlugin('[name]_[hash:8].css')
    ],
    vue: {
        loaders: utils.cssLoaders({ extract: true, sourceMap: useCssSourceMap }),
        postcss: [
            require('autoprefixer')({
                browsers: ['last 2 versions']
            })
        ]
    },
    node: {
        'child_process': 'empty'
    }
}

module.exports = config;