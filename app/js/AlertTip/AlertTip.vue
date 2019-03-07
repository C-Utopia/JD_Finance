<template >

  <div :class="$style.container" v-show="this.show">
    <span
      :class="$style.closeTip"
      @click="closeTip"
    >X</span>
    <img
      src="https://img12.360buyimg.com/jrpmobile/jfs/t1/10909/18/13174/50557/5c807f56E3917cf38/e1bacff79a946f86.png?width=720&height=1000"
      alt=""
    >
    <!-- <section :class="$style.tip_text_container">
      <div :class="$style.tip_icon">
        <span></span>
        <span></span>
      </div>
      <p :class="$style.tip_text">{{alertText}}</p>
      <div
        :class="$style.confirm"
        @click="closeTip"
      >确认</div>
    </section> -->
  </div>
</template> 
<script>
export default {
  name: "AlertTip",
  props: {
    show: {
      type: Boolean
    }
  },
 
  methods: {
    closeTip () {
        this.$emit("close")
    } 
  }
};
</script>
<style lang='scss'  module>
@keyframes tipMove {
  0% {
    transform: scale(1);
  }
  35% {
    transform: scale(0.8);
  }
  70% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}

.container {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 999;
  background: rgba(0, 0, 0, 0.5);
  img {
    width: 600px;
    height: 800px;
    animation: tipMove 0.4s;
    display: block;
    margin: 150px auto;
  }
  .closeTip {
    display: inline-block;
    text-align: center;
    width: 40px;
    height: 40px;
    position: absolute;
    top: 220px;
    font-size: 36px;
    color: #ddd;
    right: 50px;
  }
  .tip_text_container {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 60%;
    height: 154px;
    margin-left: -30%;
    margin-top: -77px;
    animation: tipMove 0.4s;
    background-color: rgba(255, 255, 255, 1);
    padding-top: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border-radius: 5px;
    .tip_icon {
      width: 55px;
      height: 55px;
      border: 2px solid yellow;
      border-radius: 50%;
      font-size: 20px;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      span:nth-of-type(1) {
        width: 2px;
        height: 30px;
        background-color: yellow;
      }

      span:nth-of-type(2) {
        width: 3px;
        height: 3px;
        border: 1px;
        border-radius: 50%;
        margin-top: 5px;
        background-color: yellow;
      }
    }
    .tip_text {
      font-size: 14px;
      color: #333;
      line-height: 60px;
      text-align: center;
    }
    .confirm {
      font-size: 18px;
      font-weight: bold;
      width: 100%;
      background: yellow;
      text-align: center;
      line-height: 40px;
      color: #fff;
      border-bottom-left-radius: 5px;
      border-bottom-right-radius: 5px;
    }
  }
}
</style>