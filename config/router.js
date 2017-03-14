import store from '../src/apps/vuex/store';
import { POST_PAGE_INIT_DATA } from '../src/apps/vuex/modules/xy-speech-vote/mutation-types';

const XySpeechBookingPage = resolve => require.ensure([], () => resolve(require('../src/apps/xy-speech-booking/index')), 'xy-booking');
const XySpeechVotePage = resolve => require.ensure([], () => resolve(require('../src/apps/xy-speech-vote/index')), 'xy-vote');

module.exports = [
    {
        path: '/',
        name: 'index',
        component: {
            template: `
                <div>
                    <router-view></router-view>
                </div>`,
        },
        children: [
            {
                path: 'xy-speech-booking',
                name: 'xy-booking',
                component: XySpeechBookingPage
            }, {
                path: 'xy-speech-vote',
                name: 'xy-vote',
                component: XySpeechVotePage,
                beforeEnter: (to, from, next) => {
                    document.title = '希言“动物成语故事大王”比赛开启投票模式啦！';

                    store
                        .dispatch(POST_PAGE_INIT_DATA, {
                            activity_id: 60,
                            openid: store.state.common.wechatUser.openId
                        })
                        .then(() => {
                            next();
                        })
                        .fail(() => {
                            alert('获取页面数据，将自动刷新页面重新获取');
                            location.reload();
                        });
                }
            }
        ],
    },
    {
        path: '/*',
        name: 'notFound',
        component: {
            template: `<div>404！找不到该页面</div>`
        }
    }
]