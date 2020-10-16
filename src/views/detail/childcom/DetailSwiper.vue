<template>
  <swiper class="product-detail-swiper">
    <swiper-item v-for="(item,index) in topImages" :key="index" @click.native="clickSwiperItem">
      <img :src="item" alt="">
    </swiper-item>
  </swiper>
</template>

<script>
import {Swiper, SwiperItem} from "@/components/common/swiper/index";


export default {
  name: "DetailSwiper",
  components: {Swiper, SwiperItem},
  props: {
    topImages: {
      type: Array,
      default: []
    }
  },
  methods: {
    clickSwiperItem() {
      console.log('clickSwiperItem');
    },
  }
}
</script>


<style scoped>

.product-detail-swiper {
  height: 300px;
  overflow: hidden;
}
</style>
