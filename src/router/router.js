// 大部分路由配置在router.js或者 router/index.js；但是导航守卫在main.js配置
import Vue from 'vue'
import VueRouter from 'vue-router'
import login from '../views/login/login.vue'
// import Home from '../views/home/Home.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        redirect: '/layout' // 返回根路径直接重定向到该页面
    },
    // {
    //     // 正常加载，进入页面就加载整个页面
    //     path: '/home',
    //     name: 'Home',
    //     component: Home
    // },
    // {
    //     // 动态路由加载【编程式导航】通过：id；需要在Home.vue页面获取；根据id不同显示不一样内容。该种方法需要在页面通过$router.event动态配置路由。可以自定义参数
    //     path: '/home/:id',
    //     name: 'Home',
    //     component: () =>
    //         import ('../views/home/Home.vue')
    // },
    {
        // 嵌套路由;即children
        // 这里的id即使需要传递给子页面的参数
        path: '/home/:ids',
        component: () =>
            import ('../views/home/Home.vue'),
        children: [{
            // children是个数组,这是数组内元素,本元素指向child
            path: '/child',
            component: () =>
                import ('../views/Child.vue')
        }],
        name: "Home",
    },
    {
        // 懒加载方式，进入页面不加载，只是按照顺序加载
        path: '/linechart',
        name: 'linechart',
        component: () =>
            import ('../components/charts/linechart.vue')
    }, {
        path: '/login',
        name: 'loginpage',
        component: login
    }, {
        path: '/parent/:id',
        name: 'Parent',
        component: () =>
            import ('../views/Parent.vue'),
        children: [{
            path: './child',
            component: () =>
                import ('../views/Child.vue')
        }]
    }, {
        path: '/layout',
        component: () =>
            import ('../views/element/Layout.vue'),
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router