import api from '../../../../utils/api';
import apiUrls from '../../../../../config/api';

import {
    POST_EXHIBITIONS,
    POST_EXHIBITIONS_ING,
    POST_EXHIBITIONS_SUCCESS,
    POST_EXHIBITIONS_FAIL,
} from './mutation-types';

export default {
    [POST_EXHIBITIONS](context, data) {
        context.dispatch(POST_EXHIBITIONS_ING);

        api
            .post(apiUrls.xySpeechVote.getExhibitions, data)
            .then(res => {
                context.dispatch(POST_EXHIBITIONS_SUCCESS);
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
};