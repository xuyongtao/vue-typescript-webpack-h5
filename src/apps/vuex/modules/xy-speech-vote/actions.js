import api from '../../../../utils/api';
import apiUrls from '../../../../../config/api';

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
    [POST_EXHIBITIONS](context, data) {
        context.dispatch(POST_EXHIBITIONS_ING);

        return api
            .post(apiUrls.xySpeechVote.getExhibitions, data)
            .then(res => {
                if (res && res.meta.code === 0) {
                    context.dispatch(POST_EXHIBITIONS_SUCCESS, res.data.exhibitions);
                    return res.data;
                } else {
                    return;
                }
            })
            .fail(res => {
                context.dispatch(POST_EXHIBITIONS_FAIL);
            })
    },
    [POST_EXHIBITIONS_ING](context) {
        context.commit(POST_EXHIBITIONS_ING);
    },
    [POST_EXHIBITIONS_SUCCESS](context, data) {
        context.commit(POST_EXHIBITIONS_SUCCESS, data);
    },
    [POST_EXHIBITIONS_FAIL](context) {
        context.commit(POST_EXHIBITIONS_FAIL);
    },

    [POST_SEARCH_EXHIBITIONS](context, data) {
        context.dispatch(POST_SEARCH_EXHIBITIONS_ING);

        return api
            .post(apiUrls.xySpeechVote.searchExhibitions, data)
            .then(res => {
                if (res && res.meta.code === 0) {
                    context.dispatch(POST_SEARCH_EXHIBITIONS_SUCCESS, res.data.exhibitions);
                    return res.data;
                } else {
                    return;
                }
            })
            .fail(res => {
                context.dispatch(POST_SEARCH_EXHIBITIONS_FAIL);
            })
    },
    [POST_SEARCH_EXHIBITIONS_ING](context) {
        context.commit(POST_SEARCH_EXHIBITIONS_ING);
    },
    [POST_SEARCH_EXHIBITIONS_SUCCESS](context, data) {
        context.commit(POST_SEARCH_EXHIBITIONS_SUCCESS, data);
    },
    [POST_SEARCH_EXHIBITIONS_FAIL](context) {
        context.commit(POST_SEARCH_EXHIBITIONS_FAIL);
    },

    [POST_VOTE](context, data) {
        context.dispatch(POST_VOTE_ING);

        return api
            .post(apiUrls.xySpeechVote.vote, data)
            .then(res => {
                if (res && res.meta.code === 0) {
                    context.dispatch(POST_VOTE_SUCCESS);
                    return res.data;
                } else {
                    return;
                }
            })
            .fail(res => {
                context.dispatch(POST_VOTE_FAIL);
            })
    },
    [POST_VOTE_ING](context) {
        context.commit(POST_VOTE_ING);
    },
    [POST_VOTE_SUCCESS](context) {
        context.commit(POST_VOTE_SUCCESS);
    },
    [POST_VOTE_FAIL](context) {
        context.commit(POST_VOTE_FAIL);
    },

    [POST_RANKS](context, data) {
        context.dispatch(POST_RANKS_ING);

        return api
            .post(apiUrls.xySpeechVote.getRankLists, data)
            .then(res => {
                if (res && res.meta.code === 0) {
                    context.dispatch(POST_EXHIBITIONS_SUCCESS, res.data.exhibitions);
                    return res.data;
                } else {
                    return;
                }
            })
            .fail(res => {
                context.dispatch(POST_EXHIBITIONS_FAIL);
            })
    },
    [POST_RANKS_ING](context) {
        context.commit(POST_RANKS_ING);
    },
    [POST_RANKS_SUCCESS](context) {
        context.commit(POST_RANKS_SUCCESS);
    },
    [POST_RANKS_FAIL](context) {
        context.commit(POST_RANKS_FAIL);
    },

};