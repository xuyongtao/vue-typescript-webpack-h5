import storePlug from 'store';

import api from '../../../../utils/api';
import apiUrls from '../../../../../config/api';

export const POST_GET_WECHAT_USER = 'POST_GET_WECHAT_USER';
const POST_GET_WECHAT_USER_ING = 'POST_GET_WECHAT_USER_ING';
const POST_GET_WECHAT_USER_SUCCESS = 'POST_GET_WECHAT_USER_SUCCESS';
const POST_GET_WECHAT_USER_FAIL = 'POST_GET_WECHAT_USER_FAIL';

const actions = {
    [POST_GET_WECHAT_USER](context, data) {
        context.dispatch(POST_GET_WECHAT_USER_ING);

        api
            .post(apiUrls.getWechatUser, data)
            .then(res => {
                context.dispatch(POST_GET_WECHAT_USER_SUCCESS, res.data);
            })
            .fail(res => {
                context.dispatch(POST_GET_WECHAT_USER_FAIL);
            })
    },
    [POST_GET_WECHAT_USER_ING](context) {
        context.commit(POST_GET_WECHAT_USER_ING);
    },
    [POST_GET_WECHAT_USER_SUCCESS](context, data) {
        context.commit(POST_GET_WECHAT_USER_SUCCESS, data);
    },
    [POST_GET_WECHAT_USER_FAIL](context) {
        context.commit(POST_GET_WECHAT_USER_FAIL);
    },
};

const mutations = {
    [POST_GET_WECHAT_USER_ING](state) {
        state.fetching = true;
    },
    [POST_GET_WECHAT_USER_SUCCESS](state, data) {
        state.fetching = false;

        var wechatUser = {
            openId: data.id,
            avatar: data.avatar,
            nickname: data.nickname,
            name: data.name,
        }

        state.wechatUser = wechatUser;
        storePlug.set('qm91-wechat-user', wechatUser);
    },
    [POST_GET_WECHAT_USER_FAIL](state) {
        state.fetching = false;
    }
};

const state = {
    fetching: false,
    wechatUser: {
        openId: '',
        avatar: '',
        nickname: '',
        name: '',
    }
};

export default {
    state,
    actions,
    mutations,
}