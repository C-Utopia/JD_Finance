<template >
  <div :class="$style.header">
    <span :class="$style.left" @click="back">
      <!-- <router-link
        tag="em"
        :to="{name:'register'}"
      >注册&nbsp;|&nbsp;</router-link>
      <router-link
        tag="em"
        :to="{name:'login'}"
      >登录</router-link> -->
      <svg
        class="icon"
        aria-hidden="true"
      >
        <use xlink:href="#icon-fanhui"></use>
      </svg>
    </span>

    <router-link :to="{name:'download'}">
      <btn :class="$style.btnDownload">下载&nbsp;App</btn>
    </router-link>

    <span :class="$style.iconBox">
      <!-- 
      <svg
        class="icon"
        aria-hidden="true"
      >
        <use xlink:href="#icon-sousuo"></use>
      </svg> -->
    </span>
  </div>
</template>

<script>
import btn from "../core/btn.vue"
export default {
  components: {
    btn,
  },
  methods: {
    back(){
            if (window.history.length <= 1) {
                this.$router.push({path:'/'})
                return false
            } else {
                this.$router.go(-1)
            }
            //上面都没执行就说明卡在当前页不是最后一条， histroy记录数量大于1，又没有回退记录，只能返回首页，
         //如果上面都执行了 页面都跳走了，这个也就不用管了   
            setTimeout(() => {
                this.$router.push({path:'/'})      
            },0)
        }
  }
}
</script>

<style lang="scss" module>
.header {
  color: #666;
  height: 80px;
  line-height: 80px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  font-size: 32px;
  background: #fff url(//m.jr.jd.com/spe/qyy/main/images/jr-logo.png) center
    no-repeat;
  background-size: auto 50%;
  z-index: 100;
  .left {
    font-size: 36px;
    height: 30px;
    line-height: 30px;
    margin: 17px 0 0 18px;
  }
  .iconBox {
    float: right;
    padding-right: 15px;
    font-size: 36px;
  }
  .btnDownload {
    float: right;
    font-size: 18px;
    border-width: 0;
    height: 50px;
    line-height: 50px;
    min-width: 130px;
    padding: 0;
    border-radius: 8px;
    margin: 15px 24px 0 0;
  }
}
</style>
