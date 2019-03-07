<template>
    <div id="app">
        <router-view/>
        <Scroll/>
    </div>
</template>

<script>
import Scroll from "./public/scroll"
export default {
    name: "App",
    components: {
        Scroll
    },
    mounted () {
        // console.log('111')
        // let isLogin = window.localStorage.getItem('isLogin')
        // if(!isLogin){
        //     this.$router.push('/login')
        // }
    }
}
</script>
