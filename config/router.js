const XySpeechBookingPage = resolve => require.ensure([], () => resolve(require('../src/apps/xy-speech-booking/index')), 'xy-booking');

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
                name: 'xy',
                component: XySpeechBookingPage
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