const MotherSchoolPage = resolve => require.ensure([], () => resolve(require('../src/apps/mother-school/index')), 'school')
const NinePatchPage = resolve => require.ensure([], () => resolve(require('../src/apps/nine-patch/index')), 'patch')

export default [
    {
        path: '/',
        name: 'index',
        alias: [
            '/index',
        ],
        component: {
            template: `
                <div>
                    <router-view></router-view>
                </div>`,
        },
        children: [{
            path: 'mother-school',
            name: 'ms',
            component: MotherSchoolPage
        }, {
            path: 'nine-patch',
            name: 'np',
            component: NinePatchPage
        }],
    },
    {
        path: '/*',
        name: 'notFound',
        component: {
            template: `<div>404</div>`
        }
    }
]