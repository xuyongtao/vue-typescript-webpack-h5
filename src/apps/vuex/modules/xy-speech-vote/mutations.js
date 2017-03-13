import {
    POST_EXHIBITIONS,
    POST_EXHIBITIONS_ING,
    POST_EXHIBITIONS_SUCCESS,
    POST_EXHIBITIONS_FAIL,
    POST_SEARCH_EXHIBITIONS,
    POST_SEARCH_EXHIBITIONS_ING,
    POST_SEARCH_EXHIBITIONS_SUCCESS,
    POST_SEARCH_EXHIBITIONS_FAIL,
    POST_VOTE,
    POST_VOTE_ING,
    POST_VOTE_SUCCESS,
    POST_VOTE_FAIL,
    POST_RANKS,
    POST_RANKS_ING,
    POST_RANKS_SUCCESS,
    POST_RANKS_FAIL
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
    },

    [POST_SEARCH_EXHIBITIONS_ING](state) {
        state.fetching = true;
    },
    [POST_SEARCH_EXHIBITIONS_SUCCESS](state, data) {
        state.fetching = false;
    },
    [POST_SEARCH_EXHIBITIONS_FAIL](state) {
        state.fetching = false;
    },

    [POST_VOTE_ING](state) {
        state.fetching = true;
    },
    [POST_VOTE_SUCCESS](state, data) {
        state.fetching = false;
    },
    [POST_VOTE_FAIL](state) {
        state.fetching = false;
    },

    [POST_RANKS_ING](state) {
        state.fetching = true;
    },
    [POST_RANKS_SUCCESS](state, data) {
        state.fetching = false;
    },
    [POST_RANKS_FAIL](state) {
        state.fetching = false;
    }
};