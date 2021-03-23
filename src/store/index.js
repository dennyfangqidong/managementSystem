//  @vuex，具体操作在页面
//  store/index.js是一个vuex的入口文件，只是引用vue和vuex并实例化。
import Vue from 'vue'
import Vuex from 'vuex'
import count from './count'

Vue.use(Vuex)


export default new Vuex.Store({
    modules: {
        // 键名和值一样的时候，就可以只写出这个一样的内容，不需要key:value形式
        count
    }
})