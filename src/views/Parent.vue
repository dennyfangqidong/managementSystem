<template>
    <div>
        <h1>Parent</h1>
        <h2>{{msg}}</h2>
        <!-- vuex的计算属性、mutation可以直接在模板语法中引用，返回的即该计算属性/mutation处理的结果 -->
        <h5>vuex:&nbsp;<span style="color:red">{{count}}</span></h5>
        <h5>getters:&nbsp;<span style="color:red">{{doubleCount}}</span></h5>   
             
        <button @click="add">vuex muatation-add && action delayAdd (实际效果，点击后立即+1，再过一秒加2)</button>
        <m-child v-bind:msg="'This message comes from Parent.vue'" @showMsg="showMessage" ref="child" v-bind="$attrs" v-on="$listeners"></m-child>
        <!-- 这个m-child是引用的子组件，
        而v-bind表示：后的内容将被绑定到组件属性中；
        此处即‘This message comes from Parent.vue’将被绑定到m-child的msg属性中 
        这里,:msg后""的属性是作为一个变量，因而如果去掉‘’会出错。
        但是v-bind改成msg="This message comes from Parent.vue"是可以的，因为此时后边内容是认为字符串
        @showMsg 是监听事件,showMsg是一个自定义事件；而“”内的showMessage则表示自定义事件的定义/发布，即父组件函数
        ref定义子组件的ref名称，此处为child；但是注意在html内是ref，但是在输出部分是有s的，即$refs
        $attrs是上层属性绑定的数据返回的中转，用来传递给子组件,v-bind绑定
        $listeners是下层属性回返上层属性中转，将$emit数据传给父组件，v-on绑定-->
    </div>
</template>

<script>
// 引用子组件
import MChild from './Child'
// 引用辅助函数
import {mapState,mapGetters} from 'vuex'
// 此处无需写名name是什么
    export default {
        // computed: {
        //     // 追踪vuex数据
        //     count() {
        //         // 获取vuex数据,直接通过内置变量$store获取数据
        //         return this.$store.state.count
        //     }
        // },
        // 使用对象展开运算；mapState可以看作一个对象
        // 展开对象，与其他计算属性一起合并
        computed: {
            ...mapState({
                // 因为我们采用了模块化的vuex方案，因而，count不再是单独的数据，而是一个模块，不可以count:'count'
                // state.count.count 中，第一个count是模块名称，即store/index.js引用count.js的组件名count；第二个count是调用的是state为count 
                count: state=>state.count.count
                // count:'count', //未模块化可以采用形式
             }),
            //  doubleCount(){
            //      return this.$store.getters.doubleCount
            //  }
            ...mapGetters([
            //  如果传数组，需要计算属性名字跟store.js的getters定义的参数名称一样，字符串即代表this.$store.getters.getter方法。
            //  但是用对象可以用不一样的key值作为属性名，不需要与store.js的getters参数名一样
               'doubleCount'
            ])
        },
        data(){
            return {
                msg:''
            }
        },
        components: {
            // 引入除了在components要加入之外，还要import
            MChild
        },
        methods: {
            showMessage(val) {
                // 此处自定义事件发布；@showMsg是子组件发送过来的事件名称，“”内的是对该事件的处理函数，不需要与emit事件同名（即不需要也是showMsg）
                // val即监听事件接收到$emit传递过来的变量;
                this.msg = val
                console.log("showMessage: ",val)
            },
            add(){
                // 对vuex操作通过$store操作
                this.$store.commit('add')
                this.$store.dispatch('delayAdd')
            }
        },
        mounted () {
            // 所有子组件数据或发送给父组件的事件,this.$children
            console.log("this.$children: ",this.$children);
            // this.$refs与this.$children大同小异，但是$refs具体限定名称，可以找到这个组件
            // 还需注意，此处是$refs,bushi $ref；返回组件
            console.log("ref: ",this.$refs.child);
        },
    }
</script>

<style scoped>

</style>