import Vue from 'vue';
import VueRouter from 'vue-router';

import Store from 'store';

import routerConfig from '../../config/router';
import store from './vuex/store';
import AppIndex from './app';
import { POST_GET_WECHAT_USER } from './vuex/modules/common/store';

Vue.use(VueRouter);

var router = new VueRouter({
    routes: routerConfig,
    mode: 'history'
});

router.beforeEach((to, from, next) => {
    var wechatUser = Store.get('qm91-wechat-user');

    if (wechatUser) {
        store.state.common.wechatUser = wechatUser;

        next();
    } else {
        var wechatOpenId = to.query.openid;

        if (wechatOpenId) {
            //发请求
            console.log('发送请求');

            store.dispatch(POST_GET_WECHAT_USER, {
                openid: wechatOpenId
            });

            next();
        } else {
            next();
            // 以下链接参数的顺序不能改动（微信限制）
            // location.href =
            //     'https://open.weixin.qq.com/connect/oauth2/authorize?' +
            //     'appid=wx3c4a353b54fc5d32' +
            //     '&redirect_uri=' + encodeURIComponent('http://qmin91.com/h5?url=h5.qmin91.com/' + to.fullPath.slice(1)) +
            //     '&response_type=code' +
            //     '&scope=snsapi_userinfo' +
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


