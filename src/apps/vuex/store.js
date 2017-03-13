import Vue from 'vue';
import Vuex from 'vuex';

import xySpeechBooking from './modules/xy-speech-booking/store';
import xySpeechVote from './modules/xy-speech-vote/store';
import common from './modules/common/store';

Vue.use(Vuex);

const state = {
    loading: false,
}

const store = new Vuex.Store({
    modules: {
        common,
        xySpeechBooking,
        xySpeechVote,
    },
    state,
})


export default store;