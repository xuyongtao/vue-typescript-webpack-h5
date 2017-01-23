module.exports = {
    build: {
        env: {
            NODE_ENV: '"production"'
        },
        productionSourceMap: true,
        productionGzip: false,
        productionGzipExtensions: ['js', 'css']
    },
    dev: {
        env: {
            NODE_ENV: '"development"'
        },
        port: 8080,
        host: '127.0.0.1',
        assetsPublicPath: '/',
        cssSourceMap: false
    }
}