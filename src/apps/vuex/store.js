import Vue from 'vue';
import Vuex from 'vuex';

import xySpeechBooking from './modules/xy-speech-booking/store';

Vue.use(Vuex);

const state = {
    loading: false,
}

const store = new Vuex.Store({
    modules: {
        xySpeechBooking,
    },
    state,
})


export default store;