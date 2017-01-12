export default [
    {
        path: '/index',
        name: 'index',
        component: {
            template: `
                <div>
                    <h1>index</h1>
                    <router-view></router-view>
                </div>`,
        },
        children: [{
            path: 'a',
            name: 'aPath',
            component: {
                template: '<h2>a</h2>'
            }
        }, {
            path: 'b',
            name: 'bPath',
            component: {
                template: '<h2>b</h2>'
            }
        }]
    },
    {
        path: '/test/:user/detail/:id',
        name: 'test',
        component: {
            template: `
                <div>
                    <h4>test</h4> 
                    <p>路由id参数{{ $route.params.id }}</p> 
                    <p>路由user参数{{ $route.params.user }}</p>
                    <p>路由查询参数{{ $route.query }}</p>
                    <p>路由全路径{{ $route.fullPath }}</p>
                    <p>路由{{ $route.path }}</p>
                </div>`
        }
    },
    {
        path: '/*',
        name: 'notFound',
        component: {
            template: `<div>404</div>`
        }
    }
]