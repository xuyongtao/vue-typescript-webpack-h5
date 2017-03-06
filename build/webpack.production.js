var webpack = require("webpack");
var webpackConfig = require("./webpack.config");
var utils = require("./utils");
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

// 处理warning http://stackoverflow.com/questions/30030031/passing-environment-dependent-variables-in-webpack
webpackConfig.plugins.push(
    new webpack.DefinePlugin({
        "process.env": {
            NODE_ENV: JSON.stringify("production")
        }
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
        webpackConfig.output.publicPath = process.argv[3];
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