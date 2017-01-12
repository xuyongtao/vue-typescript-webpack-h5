var webpack = require('webpack');
var htmlWebpackPlugin = require('html-webpack-plugin');

var utils = require('./utils');
var fullPath = utils.fullPath;
var ROOT_PATH = fullPath('../');
var SRC_PATH = ROOT_PATH + '/src';
var DIST_PATH = ROOT_PATH + '/dist';
var NODE_MODULES_PATH = ROOT_PATH + "/node_modules";

var config = {
    entry: {
        school: [
            './src/apps/index.ts'
        ],
        lib: [
            'vue',
            'vue-router',
            'vue-class-component'
        ]
    },
    output: {
        path: DIST_PATH,
        filename: '[name]_[hash:8].js'
    },
    resolve: {
        extensions: ['', '.js', '.ts'],
        alias: {
            'vue': NODE_MODULES_PATH + '/vue/dist/vue.js',
            'vue-router': NODE_MODULES_PATH + '/vue-router/dist/vue-router.js'
        }
    },
    module: {
        loaders: [
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                loaders: ['ts']
            }
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin("lib", "lib.bundle_[hash:8].js"),
        new htmlWebpackPlugin({
            filename: 'index.html',
            template: SRC_PATH + '/apps/index.html',
            inject: true
        })
    ]
}

module.exports = config;