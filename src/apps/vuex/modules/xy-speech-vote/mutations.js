import {
    POST_PAGE_INIT_DATA,
    POST_PAGE_INIT_DATA_ING,
    POST_PAGE_INIT_DATA_SUCCESS,
    POST_PAGE_INIT_DATA_FAIL,
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
    // 获取页面初始信息
    [POST_PAGE_INIT_DATA_ING](state) {
        state.fetching = true;
    },
    [POST_PAGE_INIT_DATA_SUCCESS](state, data) {
        state.fetching = false;
        state.pageInitData = {
            pv: data.pv,
            votes: data.votes,
        };
    },
    [POST_PAGE_INIT_DATA_FAIL](state) {
        state.fetching = false;
    },
    // 获取优秀作品
    [POST_EXHIBITIONS_ING](state) {
        state.fetching = true;
    },
    [POST_EXHIBITIONS_SUCCESS](state, data) {
        state.fetching = false;
    },
    [POST_EXHIBITIONS_FAIL](state) {
        state.fetching = false;
    },
    // 获取搜索结果
    [POST_SEARCH_EXHIBITIONS_ING](state) {
        state.fetching = true;
    },
    [POST_SEARCH_EXHIBITIONS_SUCCESS](state, data) {
        state.fetching = false;
    },
    [POST_SEARCH_EXHIBITIONS_FAIL](state) {
        state.fetching = false;
    },
    // 投票
    [POST_VOTE_ING](state) {
        state.fetching = true;
    },
    [POST_VOTE_SUCCESS](state, data) {
        state.fetching = false;
    },
    [POST_VOTE_FAIL](state) {
        state.fetching = false;
    },
    // 获取排行榜
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