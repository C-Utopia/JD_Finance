<template>

  <transition name="slide-fade">
    <div
      class="scrollTop"
      v-if="showTop"
      @click="toTop"
    >
<svg class="icon" aria-hidden="true">
    <use xlink:href="#icon-webicon211"></use>
</svg>
    </div>
  </transition>

</template>
<script>
export default {
  name: 'scroll-top',
  data () {
    return {
      scrollTop: 0,
      time: 0,
      dParams: 20,
      scrollState: 0
    }
  },
  computed: {
    showTop: function () {
      let value = this.scrollTop > 600 ? true : false;
      return value;
    },
  },
  mounted () {
    window.addEventListener('scroll', this.getScrollTop);
  },
  methods: {
    toTop (e) {
      if (!!this.scrollState) {
        return;
      }
      this.scrollState = 1;
      e.preventDefault();
      let distance = document.documentElement.scrollTop || document.body.scrollTop;
      let _this = this;
      this.time = setInterval(function () { _this.gotoTop(_this.scrollTop - _this.dParams) }, 10);
    },
    gotoTop (distance) {
      this.dParams += 20;
      distance = distance > 0 ? distance : 0;
      document.documentElement.scrollTop = document.body.scrollTop = window.pageYOffset = distance;
      if (this.scrollTop < 10) {
        clearInterval(this.time);
        this.dParams = 20;
        this.scrollState = 0;
      }
    },
    getScrollTop () {
      this.scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
    }
  },

}
</script>
<style scoped>
.scrollTop {

  position: fixed;
  z-index: 998;
  right: 40px;
  bottom: 200px;
  cursor: pointer;
  background: rgba(0,0,0,0.4);
  width: 60px;
  height: 60px;
  border-radius: 50%;
  box-shadow: 0px 0px 20px #333;
  text-align: center;
  color: #fff;
  line-height: 60px;
  font-weight: bold;
  outline: none;
}
/* 可以设置不同的进入和离开动画 */
/* 设置持续时间和动画函数 */
.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.2s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}



</style>