// 入口组件
<template>
  <div id="app">
    <!--跳转链接的组件-->
    <!-- <router-link to="/home">home</router-link> -->
    <!-- 如果需要在这里显示router内容，在这里需要router-view；如果这里需要显示路由内容，需要写出router-view；如果没有，则会跳转但是不显示 -->
    <router-view></router-view>
    <!-- <br/> -->
    <!-- 该部分对应函数式跳转，通过toHome跳转到/home页面 -->
    <!-- <button @click="toHome">to home函数式跳转</button> -->
    <!--  通过函数式跳转toIndex跳转到首页-->
    <!-- <button @click="toIndex">to index函数式跳转</button> -->
    <!--vue的命名规范，大写变为小写，并在两个大写之间用-隔开 --> 
    <!-- <m-parent :listenerMsg="ListenerMsg" @sendtoAppByListener="getListener"></m-parent>  -->
    <!-- 设置传递事件，点击则传递；passMsg是点击后的传递方法 -->
    <!-- <button @click="passMsg">Send to Child.vue from App.vue by $bus</button> -->
    <!-- <div style="border:solid 1px"> -->
      <!-- <b>send data by $attrs</b> -->
      <!-- 由于$attrs传递的是将父组件（m-parent）上所有未绑定props、:class、:style的属性传递给子属性，
      msgb，msgc没有在Parent上绑定，但是msg是在<m-parent>组件中的props是由对应绑定的,因而msg被$attrs过滤
      通过$attrs传递参数时，还需要注意，在最终接收的子组件之上的所有引用该组件组件，都租要加上v-bind="$attrs"绑定属性
      最终，子组件通过this.$attrs获取所有父组件传递过来数据 -->
      <!-- <m-parent :msg="a" :msgb="b" :msgc="c"></m-parent> -->
      <!-- <br/> -->
      <!-- <b>send data by $attrs finished</b> -->
    <!-- </div> -->
    <!-- <br/> -->
    <!-- <div style="border:dotted 2px red"> -->
      <!-- <h5>{{ListenerMsg}}</h5> -->
      <!-- <m-parent :class="{mphidden:isActive}" @sendtoAppByListener="getListener" :ListenerMsg="ListenerMsg"></m-parent> -->
    <!-- </div> -->
  </div>
</template>

<script>
// 引入组件myParent，MParent是在import时候起的名称，此处因为exportdefault时没有说是哪一个，因而此处MParent就是整个组件
import MParent from './views/Parent'
// 引入总线文件，辅助数据传递 - 此处数据在App.vue和Child.vue间传递
import bus from './util/bus'

export default {
  data() {
    return {
      a: 'msgA',
      b: 'msgB',
      c: 'msgC',
      ListenerMsg:'data from Child.vue by Listener',
      isActive: false,
    }
  },
  components: {
    // 引入的组件也要在components内写入
    MParent
  },
  methods: {
    passMsg() {
      // 用事件总线传递事件
      // 所有的传递事件用$emit进行，即$emit触发事件
      // 需要在Child.vue监听并执行
      bus.$emit('childMessage',"I am from App.vue by bus")
    },
    getListener(val) {
      this.ListenerMsg = val
      console.log(this.ListenerMsg)
    },
    toHome(){
      // 函数式跳转，跳转路由；$代表vue里固定参数;对应【to home函数式跳转】按钮
      // 通过push跳转,跳转到home路由
      // 需要加参数，在query内增加,与path对应
      // 通过params加参数，和name搭配。否则会传参失败。name在router.js定义。params的参数没有渲染到url内 
      this.$router.push({path:'/home', query: {name:'Jack'}})
      this.$router.push({name:'Home', params: {id:'Kimchi'}})
    },
    toIndex(){
      // 函数式跳转，跳转路由；$代表vue里固定参数
      // 通过push跳转,跳转到/路由
      this.$router.push({path:'/'})
    }
  },
}
</script>

<style>
.mphidden {
  display:none;
}
</style>


<!-- vue $attr 产生原因：A 组件与 C 组件之间属于跨多级的组件嵌套关系，以往两者之间如需实现通信，往往通过以下方式实现：

借助 B 组件的中转，从上到下props依次传递，从下至上，$emit事件的传递，达到跨级组件通信的效果
借助Vuex的全局状态共享
Vue Event Bus，使用Vue的实例，实现事件的监听和发布，实现组件之间的传递。
很显然，第一种通过props和$emit的方式，使得组件之间的业务逻辑臃肿不堪，B组件在其中仅仅充当的是一个中转站的作用。如使用第二种 Vuex的方式，某些情况下似乎又有点大材小用的意味，（仅仅是想实现组件之间的一个数据传递，并非数据共享的概念）。第三种情况的使用在实际的项目操作中发现，如不能实现很好的事件监听与发布的管理，往往容易导致数据流的混乱，在多人协作的项目中，不利于项目的维护。

$attrs以及$listeners的出现解决的就是第一种情况的问题，B 组件在其中传递props以及事件的过程中，不必在写多余的代码，仅仅是将$attrs以及$listeners向上或者向下传递即可。

-->
