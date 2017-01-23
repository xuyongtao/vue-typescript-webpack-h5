var glob = require('glob');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

exports.pickFiles = function (options) {
    var files = glob.sync(options.pattern);

    return files.reduce(function (data, filename) {
        var matched = filename.match(options.id);
        var name = matched[1];

        data[name] = path.resolve(__dirname, filename);
        return data;
    }, {});
};

exports.fullPath = function (dir) {
    return path.resolve(__dirname, dir);
};

exports.getIP = function () {
    var os = require('os');
    var IPv4 = '127.0.0.1';
    var interfaces = os.networkInterfaces();

    for (var key in interfaces) {
        interfaces[key].some(function (details) {
            if (details.family == 'IPv4' && key == 'en0') {
                IPv4 = details.address;
                return true;
            }
        });
    }
    return IPv4;
}

exports.cssLoaders = function (options) {
    options = options || {};

    function generateLoaders(loaders) {
        var sourceLoader = loaders.map(function (loader) {
            var extraParamChar;
            if (/\?/.test(loader)) {
                loader = loader.replace(/\?/, '-loader?');
                extraParamChar = '&';
            } else {
                loader = loader + '-loader';
                extraParamChar = '?';
            }
            return loader + (options.sourceMap ? extraParamChar + 'sourceMap' : '');
        }).join('!');

        if (options.extract) {
            return ExtractTextPlugin.extract('style-loader', sourceLoader);
        } else {
            return ['style-loader', sourceLoader].join('!');
        }
    }

    // http://vuejs.github.io/vue-loader/configurations/extract-css.html
    return {
        css: generateLoaders(['css']),
        postcss: generateLoaders(['css']),
        less: generateLoaders(['css', 'less']),
        sass: generateLoaders(['css', 'sass?indentedSyntax']),
        scss: generateLoaders(['css', 'sass']),
        stylus: generateLoaders(['css', 'stylus']),
        styl: generateLoaders(['css', 'stylus'])
    }
}

exports.styleLoaders = function (options) {
    var output = [];
    var loaders = exports.cssLoaders(options);
    for (var extension in loaders) {
        var loader = loaders[extension];
        output.push({
            test: new RegExp('\\.' + extension + '$'),
            loader: loader
        })
    }
    return output;
}

