import api from '../../../../utils/api';
import apiUrls from '../../../../../config/api';

export const POST_BOOK = 'POST_BOOK';
const POST_BOOK_ING = 'POST_BOOK_ING';
const POST_BOOK_SUCCESS = 'POST_BOOK_SUCCESS';
const POST_BOOK_FAIL = 'POST_BOOK_FAIL';

export const POST_CHECK_MOBILE = 'CHECK_MOBILE';
const POST_CHECK_MOBILE_INg = 'CHECK_MOBILE_INg';
const POST_CHECK_MOBILE_SUCCESS = 'CHECK_MOBILE_SUCCESS';
const POST_CHECK_MOBILE_FAIL = 'CHECK_MOBILE_FAIL';

const actions = {
    [POST_BOOK](context, data) {
        context.dispatch(POST_BOOK_ING);

        api
            .post(apiUrls.xySpeechBooking, data)
            .then(res => {
                context.dispatch(POST_BOOK_SUCCESS);
            })
            .fail(res => {
                context.dispatch(POST_BOOK_FAIL);
            })
    },
    [POST_BOOK_ING](context) {
        context.commit(POST_BOOK_ING);
    },
    [POST_BOOK_SUCCESS](context, data) {
        context.commit(POST_BOOK_SUCCESS, data);
    },
    [POST_BOOK_FAIL](context) {
        context.commit(POST_BOOK_FAIL);
    },

    [POST_CHECK_MOBILE](context, mobile) {
        context.dispatch(POST_CHECK_MOBILE);

    }
};

const mutations = {
    [POST_BOOK_ING](state) {
        state.fetching = true;
    },
    [POST_BOOK_SUCCESS](state, data) {
        state.fetching = false;
    },
    [POST_BOOK_FAIL](state) {
        state.fetching = false;
    }
};

const state = {
    data: {
        name: '',
        old: '',
        mobile: '',
        work_name: '',
        work_url: ''
    }
};

export default {
    state,
    actions,
    mutations,
}