<template lang="html">
    <article class="">
        <Slider :items="items" :cname="$style.slider"/>
        <!-- 入口 -->
        <section :class="$style.list">
            <div :class="$style.item" v-for="item in enters" :key="item.img">
              
                    <img :src="item.img" :alt="item.title">
                    <h4>{{ item.title }}</h4>
             
            </div>
        </section>

    </article>
</template>

<script>
import Slider from "../core/slider.vue"
export default {
    components: {
        Slider,
    },
    data() {
        return {
            items: [{
                href: "a",
                src: "https://img12.360buyimg.com/jrpmobile/jfs/t1/15728/17/9256/37518/5c7cbafcEcec56aa3/d478a4f664671e07.jpg?width=750&height=320",
            }, {
                href: "b",
                src: "https://img12.360buyimg.com/jrpmobile/jfs/t1/29056/15/9174/139307/5c7cbb78Ea734a6a5/90c17f43c155e332.jpg?width=750&height=320",
            }, {
                href: "c",
                src: "https://img12.360buyimg.com/jrpmobile/jfs/t1/14617/36/9123/46685/5c7cbba1Eb575f83f/4eb34653c2f82864.jpg?width=750&height=320",
            }],
            enters: [{
                href: "g",
                img: "//img12.360buyimg.com/jrpmobile/jfs/t3991/64/2521945388/12110/93c0139/58d1e462Ncf294123.png?width=132&height=132",
                title: "优惠券",
            }, {
                href: "e",
                img: "//img12.360buyimg.com/jrpmobile/jfs/t5590/252/875247023/17343/946aa72c/59224650N0f7ffc92.png?width=132&height=132",
                title: "领红包",
            }, {
                href: "f",
                img: "//img12.360buyimg.com/jrpmobile/jfs/t4393/329/2180608902/13217/c88c0cec/58ec9dcdN1534e2d7.png?width=132&height=132",
                title: "抢钢镚",
            }, {
                href: "g",
                img: "//img12.360buyimg.com/jrpmobile/jfs/t4618/115/2179710654/11347/bf520df/58ec9d84Nfd169001.png?width=132&height=132",
                title: "领京豆",
            }, {
                href: "h",
                img: "//img12.360buyimg.com/jrpmobile/jfs/t5488/298/1036263348/12073/b4f4de97/590ac8e8Ne9def22e.png?width=135&height=135",
                title: "白条提额",
            }],
        }
    },
}
</script>

<style lang="scss" module>
  @import "../../css/element.scss";
  .slider{
    margin-top: 100px;
    img{
      width: 100%;
    }
  }
  .list{
    @include list(row);
    background: #fff;
    padding-top: 40px;
    padding-bottom: 20px;
    justify-content: space-around;
    a{
      text-decoration: none;
    }
    .item{
      text-align: center;
      img{
        display: inline-block;
        width: 90px;
        height: 90px;
      }
      h4{
        font-size: 26px;
        margin-top: 12px;
        color: #666;
      }
    }
  }
</style>
