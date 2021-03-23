<template>
    <div class="login" :style="LoginBackground">
        <p>LoginPage</p>
    </div>
</template>
<script>
    export default{
        data(){
            return{
                LoginBackground: {
                    backgroundImage:'url(' + require('../../images/背景.png') + ')',
                    backgroundRepeat:'no-repeat',
                }
            }
        }
    }
</script>
<style scoped>
    .login{
        height:100%
    }
</style>