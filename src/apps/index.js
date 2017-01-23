import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuex from 'vuex';

import routerConfig from '../../config/router';
import store from './vuex/store';
import AppIndex from './app';

Vue.use(VueRouter);


const router = new VueRouter({
    routes: routerConfig,
    mode: 'history'
});

var root = new Vue({
    router,
    store,
    el: '#app',
    render: h => h(AppIndex)
});

var child = root.$refs;

console.log(child);