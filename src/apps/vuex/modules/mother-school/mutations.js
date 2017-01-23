import {
    POST_MOTHER_SCHOOL_PHOTOS_ING,
    POST_MOTHER_SCHOOL_PHOTOS_SUCCESS,
    POST_MOTHER_SCHOOL_PHOTOS_FAIL,
} from './mutation-type';

const mutations = {
    [POST_MOTHER_SCHOOL_PHOTOS_ING](state) {
        state.fetching = true;
    },
    [POST_MOTHER_SCHOOL_PHOTOS_SUCCESS](state, data) {
        state.fetching = false;
        state.student = {
            name: data.name,
            old: data.old
        };
    },
    [POST_MOTHER_SCHOOL_PHOTOS_FAIL](state) {
        state.fetching = false;
    }
}

export default mutations;