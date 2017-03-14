import Vue from 'vue';
import VueRouter from 'vue-router';

import Store from 'store';

import routerConfig from '../../config/router';
import envConfig from '../../config/env';
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
            store
                .dispatch(POST_GET_WECHAT_USER, {
                    openid: wechatOpenId
                })
                .then(() => {
                    next();
                })
                .fail(() => {
                    alert('获取您的微信信息失败，将自动刷新页面重新获取');
                    location.reload();
                });

        } else {
            if (process.env.NODE_ENV === envConfig.build.env.NODE_ENV && domain.api) {
                // 以下链接参数的顺序不能改动（微信限制）
                location.href =
                    'https://open.weixin.qq.com/connect/oauth2/authorize?' +
                    'appid=wx3c4a353b54fc5d32' +
                    '&redirect_uri=' + encodeURIComponent('http://qmin91.com/h5?url=h5.qmin91.com/' + to.fullPath.slice(1)) +
                    '&response_type=code' +
                    '&scope=snsapi_userinfo' +
                    '#wechat_redirect';
            } else {
                next();
            }
        }
    }
})

var root = new Vue({
    router,
    store,
    el: '#app',
    render: h => h(AppIndex)
});


