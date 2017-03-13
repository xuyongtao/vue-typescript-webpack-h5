import {
    POST_EXHIBITIONS,
    POST_EXHIBITIONS_ING,
    POST_EXHIBITIONS_SUCCESS,
    POST_EXHIBITIONS_FAIL,
} from './mutation-types';

export default {
    [POST_EXHIBITIONS_ING](state) {
        state.fetching = true;
    },
    [POST_EXHIBITIONS_SUCCESS](state, data) {
        state.fetching = false;
    },
    [POST_EXHIBITIONS_FAIL](state) {
        state.fetching = false;
    }
};