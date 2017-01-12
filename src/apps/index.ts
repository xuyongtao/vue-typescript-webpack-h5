import * as Vue from 'vue';
import * as VueRouter from 'vue-router';

import routerConfig from '../configs/router';
import AppIndex from './app';

Vue.use(VueRouter);

const router = new VueRouter({
    routes: routerConfig,
    mode: 'history'
});

new Vue({
    router,
    el: '#app',
    render: h => h(AppIndex)
})