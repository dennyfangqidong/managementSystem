<template>
    <div>
        this is home
        <!-- 获取路由所需的参数,通过params.id获取 -->
        <h1>{{$route.params.ids}}+{{$route.params.ids}}*2</h1>
        <router-view></router-view>
        <button @click="showParams">显示当前id</button>
    </div>
</template>

<script>
    export default {
        methods: {
            showParams(){
                alert(this.$route.params.ids)
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>