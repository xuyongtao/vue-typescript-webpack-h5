var webpackConfig = require('./webpack.config');
var utils = require('./utils');
var config = require('../config/env');
var apis = require('../config/api');

var webpack = require('webpack');
var merge = require('webpack-merge');
var webpackDevServer = require('webpack-dev-server');

var PORT = config.dev.port;
var HOST = config.dev.host;
// 本地环境静态资源路径
var localPublicPath = 'http://' + HOST + ':' + PORT + '/';

webpackConfig = merge(webpackConfig, {
    entry: {
        index: ['webpack-dev-server/client?' + localPublicPath]
    },
    output: {
        publicPath: localPublicPath
    },
    module: {
        loaders: utils.styleLoaders({ extract: true, sourceMap: config.dev.cssSourceMap })
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': config.dev.env
        }),
    ]
})

var bodyParser = require('body-parser');
var app = new webpackDevServer(webpack(webpackConfig), {
    inline: true,
    compress: false,
    stats: {
        chunks: false,
        children: false,
        colors: true
    },
    historyApiFallback: true,
});

app.use(bodyParser.json());

app.use(apis.motherSchool.photos, function (req, res) {
    res.send({
        data: {
            name: 'yota',
            old: 23
        },
        meta: {
            code: 0,
            msg: ""
        }
    })
});

app.use(apis.xySpeechBooking, function (req, res) {
    res.send({
        meta: {
            code: 0,
            msg: "报名成功！"
        }
    });
});

app.listen(PORT, HOST, function () {
    console.log(localPublicPath);
});