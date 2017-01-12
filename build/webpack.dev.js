var webpack = require('webpack');
var webpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');

var PORT = 8080;
var HOST = "127.0.0.1";
// 本地环境静态资源路径
var localPublicPath = 'http://' + HOST + ':' + PORT + '/';

config.output.publicPath = localPublicPath;
config.entry.school.unshift('webpack-dev-server/client?' + localPublicPath);

var app = new webpackDevServer(webpack(config), {
    inline: true,
    compress: false,
    stats: {
        chunks: false,
        children: false,
        colors: true
    },
    historyApiFallback: true,
});

app.listen(PORT, HOST, function () {
    console.log(localPublicPath);
});