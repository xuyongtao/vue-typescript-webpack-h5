const XySpeechBookingPage = resolve => require.ensure([], () => resolve(require('../src/apps/xy-speech-booking/index')), 'xy-booking');
const XySpeechVotePage = resolve => require.ensure([], () => resolve(require('../src/apps/xy-speech-vote/index')), 'xy-vote');

export default [
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
                component: XySpeechVotePage
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