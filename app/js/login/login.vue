<!--  -->
<template>
  <div>
    <header :class="$style.header">京东登录</header>

    <form :class="$style.loginForm">

      <div :class="$style.top">

        <div><span>账号</span> <input
            type="text"
            value="admin"
            placeholder="你的手机号/邮箱"
          ></div>
        <div><span>密码</span> <input
            type="password"
            value="admin"
            placeholder="请输入密码"
          ></div>
      </div>
      <div :class="$style.bottom">
        <span :class="$style.forget">忘记密码</span>
        <div>

          <router-link :to="{name:'home'}"> <button :class="$style.registerBtn">注册</button></router-link>

          <router-link :to="{name:'home'}">
            <button :class="$style.loginBtn"  @click="doLogin">登录</button>
          </router-link>

        </div>

      </div>

    </form>

    <section :class="$style.loginSection">
      <h4>—————<span> &nbsp; 其他登录方式&nbsp; </span> —————</h4>
      <div :class="$style.loginType">

        <a
          href="#"
          :class="$style.item"
        >
          <svg
            :class="$style.icon"
            aria-hidden="true"
          >
            <use xlink:href="#icon-qq"></use>
          </svg>
          <br>
          <span>QQ</span>

        </a>

        <a
          href="#"
          :class="$style.item"
        >
          <svg
            :class="$style.icon"
            aria-hidden="true"
          >
            <use xlink:href="#icon-weixin"></use>
          </svg>
          <br>
          <span>微信</span>

        </a>

        <p>登录即代表您已同意 <a href="https://in.m.jd.com/help/app/private_policy.html">京东隐私政策</a> </p>
      </div>
    </section>
  </div>
</template>

<script>

export default {
  data () {
    return {
    };
  },
  methods: {
    doLogin(){
      console.log("ccc")
      window.localStorage.setItem("isLogin",true)
    }
  }
}
</script>

<style lang='scss' module>
.header {
  width: 100%;
  height: 80px;
  background-color: #fff;
  text-align: center;
  line-height: 80px;
  font-size: 32px;
  color: #333;
}
.loginForm {
  margin-top: 40px;
  color: #333;
  .top {
    background-color: #fff;
    div:nth-child(1),
    div:nth-child(2) {
      width: 100%;
      height: 80px;
      border-bottom: 1px solid #999;
      line-height: 80px;
      span {
        font-size: 28px;
        padding-left: 20px;
        padding-right: 40px;
      }
      input {
        font-size: 28px;
        border: none;
      }
    }
  }
  .bottom {
    margin-top: 20px;
    .forget {
      float: right;
      font-size: 24px;
      color: #f04752;
      padding-right: 10px;
    }
    > div {
      padding-top: 80px;
      text-align: center;
      button {
        width: 290px;
        height: 70px;
        font-size: 24px;
        border: 1px solid #f04752;
        border-radius: 5px;
      }
      .registerBtn {
        background-color: transparent;
        color: #f04752;
      }
      .loginBtn {
        background-color: #f04752;
        color: #fff;
      }
    }
  }
}
.loginSection {
  text-align: center;
  margin-top: 250px;
  h4 {
    font-size: 24px;
    color: #ddd;
    span {
      color: #333;
      font-size: 32px;
    }
  }
  .loginType {
    display: flex;
    justify-content: space-around;
    margin: 50px auto;
    width: 60%;
    a {
      text-decoration: none;
      color: #666;
      font-size: 18px;

      
      .icon{
        font-size: 64px;
        margin-bottom: 40px;
        text-align: center;
      }
      
    }
   p{
     font-size: 22px;
     position: absolute;
     bottom: 100px;
     a{
       font-size: 22px;
       color: skyblue;
     }
   }
  }
}
</style>