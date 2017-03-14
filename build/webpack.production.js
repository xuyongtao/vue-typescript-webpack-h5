var webpack = require("webpack");
var webpackConfig = require("./webpack.config");
var utils = require("./utils");
var config = require('../config/env');
var fullPath = utils.fullPath;
var distPath;
var __PRD__ = process.env.NODE_ENV == "production";
// 压缩 js、css
console.log("webpack working");

if (process.argv[2]) {
    var args = process.argv[2].split("/");
    args.shift();

    distPath = fullPath("../../" + args.join("/"));
} else {
    distPath = fullPath("../") + "/dist";
}
webpackConfig.output.path = distPath;

if (process.argv[4]) {
    var domainApi = process.argv[4];

    if (!/^http:\/\/./.test(domainApi)) {
        domainApi = 'http://' + domainApi;
    }
    if (!/.\/$/.test(domainApi)) {
        domainApi += '/';
    }
}

// 处理warning http://stackoverflow.com/questions/30030031/passing-environment-dependent-variables-in-webpack
webpackConfig.plugins.push(
    new webpack.DefinePlugin({
        "process.env": JSON.stringify(config.build.env),
        "domain.api": JSON.stringify(domainApi),
    })
)
webpackConfig.plugins.push(
    new webpack.optimize.UglifyJsPlugin({
        compress: {
            warnings: false
        }
    })
);

if (__PRD__) {
    if (process.argv[3]) {//例如："http://h5.qmjy.dev/"
        var path = process.argv[3];
        // 处理一下输入没有加http://或者末尾没有加/的情况
        if (!/^http:\/\/./.test(path)) {
            path = 'http://' + path;
        }
        if (!/.\/$/.test(path)) {
            path += '/';
        }

        webpackConfig.output.publicPath = path;
    } else {
        webpackConfig.output.publicPath = "http://h5.qmin91.com/";
    }
} else {
    webpackConfig.output.publicPath = "http://127.0.0.1:8888/";
}

webpack(webpackConfig, function (err, status) {
    if (err) {
        console.log("fail! ", err);
    } else {
        console.log("done!");
    }
});

// 针对react router，nginx需要做的配置
// http://www.59m59s.com/blog/diao-zheng-nginxzheng-que-fu-wu-react-routerying-yong/