<template>
    <div>
        <h1>Child</h1>
        <h2>{{msg}}</h2>
        <!-- 这里{{msg}}是一个模板语法，而由于msg是一个props数据，因而它实际接收的就是来自父组件Parent中的v-bind的msg -->
        <button @click="passMsg">Send to Parent</button>
        <!-- 此处是一个触发动作 -->
        <h3>{{childMsg}}</h3>
        <!-- childMsg 是通过总线bus获取的数据 -->
        <h4>{{"data comes from App.vue by Parent by means of the method - this.$attrs:  "}}{{this.$attrs}}</h4>
        <button @click="listenerEmit">$emit to App.vue by $listener</button>
    </div>
</template>

<script>
    // 引入总线文件，辅助数据传递
    import bus from '../util/bus'

    export default {
        data(){
            return{
                // childMsg 是App.vue通过总线bus.js传递过来的
                childMsg:'this shows childMsg in Child component'
            }
        },
        // props定义在组件内，用于接受引用该组件页面（父组件）的数值传递
        // 这里是<h5>内容
        props: {
            msg:{
                type: String,
                default: ''
            }
        },
        methods: {
            passMsg(){
                // 向Parent.vue传递
                // 子组件向父组件传递,showMsg使event name，即传递给父组件的事件名称；
                // 点击button，passMsg事件触发，并通过emit将参数发送到父组件；但是参数并未在父组件被处理。父组件通过showMsg获取参数后，在showMsg对参数处理
                this.$emit('showMsg','I am from Child.vue')
            },
            listenerEmit(){
                this.$emit('sendtoAppByListener','this information comes from Child.vue to App.vue by $listener via Parent.vue')
            }
        },
        mounted () {
            // 父组件里的data或者父组件的事件,this.$parent
            console.log("this.$parent",this.$parent);
            // 向App.vue 使用总线bus方式传输数据
            // $on监听事件，参数是一个回调函数
            bus.$on('childMessage',(val)=>{this.childMsg = val; console.log("msg from App.vue by bus.$on: ",val)})
            // 通过$attrs接收所有父组件传递来的数据
            console.log('attrs:',this.$attrs)
        },
    }
</script>

<style scoped>

</style>