// vuex独立的state、mutation等，并在index.js入口文件引入

export default {
    state: {
        // 存放数据；状态数
        count: 0
    },
    mutations: {
        // 类似于methods,commit提交事件
        // 默认所有mutation方法都加state参数
        add(state) {
            state.count++
        },
        decrease(state) {
            state.count--
        }
    },
    actions: {
        // 存放异步操作
        // 通过dispatch触发
        delayAdd(context) {
            setTimeout(() => {
                // 提交操作用commit
                // 调用了mutation的add方法
                context.commit('add')
            }, 1000)
        }
    },
    modules: {

    },
    getters: {
        // getters每一个定义函数都接受state参数
        // 
        doubleCount(state) {
            return state.count * 2
        }
    }
}