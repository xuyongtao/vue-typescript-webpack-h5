var fetch = require('isomorphic-fetch');
var Promise = require('thenfail').Promise;
var qs = require('query-string');

function request({
    url,
    method = 'GET',
    data
}) {
    if (method == 'GET') {
        var query = data && qs.stringify(data);

        if (query) {
            url = url + (url.indexOf('?') > -1 ? `&${query}` : `?${query}`);
        }
    }

    return fetch(url, {
        method: method.toLowerCase(),
        body: JSON.stringify(data),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
    })
        .then(response => {
            return Promise
                .resolve(response.json())
                .catch(() => {
                    throw new Error("网络或服务器错误");
                });
            ;
        })
        .then((res) => {
            if (res.meta && res.meta.code != 0) {
                console.log(res.meta.msg + ' error code is ' + res.meta.code);

                throw new Error(res.meta.msg);
            }

            if (res.meta && res.meta.redirect) {
                window.location.href = res.meta.redirect;
            }

            return res;
        })
}

module.exports = {
    get: (url, data) => {
        return Promise
            .resolve(request({
                method: "GET",
                url,
                data
            }));
    },
    post: (url, data) => {
        return Promise
            .resolve(request({
                method: "POST",
                url,
                data
            }));
    }
}