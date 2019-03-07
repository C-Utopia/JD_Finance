<template lang="html">
    <div>
        <Heador/>
        <Slider/>
        <Novice/>
        <Borrow/>
        <Money/>
        <Product/>
        <Life/>
        <Footor/>
        <Navbar/>
      <AlertTip :show="this.show" @close="closeTip"/>
      
    </div>
</template>

<script>
import Heador from "../public/header.vue"
import Footor from "../public/footer.vue"
import Navbar from "../public/navbar.vue"
import Slider from "./hslider.vue"
import Novice from "./novice.vue"
import Borrow from "./borrow.vue"
import Money from "./money.vue"
import Product from "./product.vue"
import Life from "./life.vue"
import AlertTip from '../AlertTip/AlertTip.vue'

export default {
  components: {
    Heador,
    Slider,
    Novice,
    Borrow,
    Money,
    Product,
    Life,
    Footor,
    Navbar,
    AlertTip
  },
  data () {
    return {
      show: true
    }
  },
  created () {
    // const comed = localStorage.getItem('comed')
    // if (!comed) {
    //   this.show = true;
    //   localStorage.setItem("comed", true)
    // } 
    this.show = false
  },
  methods: {
    closeTip () {
      this.show = false
    }
  }
}
</script>

<style scoped>
</style>
