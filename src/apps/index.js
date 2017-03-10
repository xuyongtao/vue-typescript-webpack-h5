import Vue from 'vue';
import VueRouter from 'vue-router';

import Store from 'store';

import routerConfig from '../../config/router';
import store from './vuex/store';
import AppIndex from './app';

Vue.use(VueRouter);

var router = new VueRouter({
    routes: routerConfig,
    mode: 'history'
});

router.beforeEach((to, from, next) => {
    if (Store.get('qm91-wechat-user')) {
        next();
    } else {
        var wechatOpenId = to.query.openId;

        if (wechatOpenId) {
            //发请求


            console.log('发送请求');
            next();
        } else {
            next();
            // location.href = 
            //     'https://open.weixin.qq.com/connect/oauth2/authorize?' + 
            //     'appid=wx3c4a353b54fc5d32' + 
            //     'redirect_uri=' + encodeURIComponent('http://qmin91.com/h5?url=' + to.fullPath.slice(1)) + 
            //     'response_type=code' + 
            //     'scope=snsapi_userinfo' + 
            //     '#wechat_redirect';
        }
    }
})

var root = new Vue({
    router,
    store,
    el: '#app',
    render: h => h(AppIndex)
});


