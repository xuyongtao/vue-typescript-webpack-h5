import Vue from 'vue';
import Vuex from 'vuex';

import motherSchool from './modules/mother-school/store';
import xySpeechBooking from './modules/xy-speech-booking/store';

Vue.use(Vuex);

const state = {
    loading: false,
}

const store = new Vuex.Store({
    modules: {
        motherSchool,
        xySpeechBooking,
    },
    state,
})


export default store;