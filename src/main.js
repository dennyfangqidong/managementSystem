// 导航守卫在main.js引入
import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store/index.js'
import * as echarts from 'echarts'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './plugins/element.js'

// 必须引入VueAxios才会避免protocol Error
import VueAxios from 'vue-axios'
import axios from 'axios'


Vue.config.productionTip = false

// 挂载elementUI
Vue.use(ElementUI)

// 挂载axios
Vue.use(VueAxios, axios)
Vue.prototype.$axios = axios

Vue.use(echarts)
Vue.prototype.$echarts = echarts

// 路由守卫
// router.beforeEach((to, from, next) => {
//     // to去向，from来源，next下一步选择。调用next方法才能下一步
//     // 路由守卫的配置
//     console.log(to.path)
//         // 不调用next方法路由则不会变动
//     next()
// })

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')