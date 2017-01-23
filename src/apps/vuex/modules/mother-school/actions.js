import { Promise } from 'thenfail';
import { api } from '../../../../utils/utils';
import apiUrls from '../../../../../config/api';
import {
    POST_MOTHER_SCHOOL_PHOTOS,
    POST_MOTHER_SCHOOL_PHOTOS_ING,
    POST_MOTHER_SCHOOL_PHOTOS_SUCCESS,
    POST_MOTHER_SCHOOL_PHOTOS_FAIL,
} from './mutation-type';

const actions = {
    [POST_MOTHER_SCHOOL_PHOTOS](context, data) {
        context.dispatch(POST_MOTHER_SCHOOL_PHOTOS_ING);

        api
            .post(apiUrls.motherSchool.photos, data)
            .then(res => {
                context.dispatch(POST_MOTHER_SCHOOL_PHOTOS_SUCCESS, res.data);
            })
            .fail(() => {
                context.dispatch(POST_MOTHER_SCHOOL_PHOTOS_FAIL);
            })
    },
    [POST_MOTHER_SCHOOL_PHOTOS_ING](context) {
        context.commit(POST_MOTHER_SCHOOL_PHOTOS_ING);
    },
    [POST_MOTHER_SCHOOL_PHOTOS_SUCCESS](context, data) {
        context.commit(POST_MOTHER_SCHOOL_PHOTOS_SUCCESS, data);
    },
    [POST_MOTHER_SCHOOL_PHOTOS_FAIL](context) {
        context.commit(POST_MOTHER_SCHOOL_PHOTOS_FAIL);
    }
}

export default actions;