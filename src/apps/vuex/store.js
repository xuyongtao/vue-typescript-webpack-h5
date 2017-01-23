import Vue from 'vue';
import Vuex from 'vuex';

import motherSchool from './modules/mother-school/store';

Vue.use(Vuex);

const state = {
    loading: false,
}

const store = new Vuex.Store({
    modules: {
        motherSchool
    },
    state,
})


export default store;