<template>
  <div class="car-list">
    <scroll class="content" ref="carlistrefs">
      <cart-list-item
        v-for="(item ,index) in cartList"
        @product="item"
        :key="index"/>
    </scroll>
  </div>
</template>

<script>
import Scroll from "@/components/common/scroll/Scroll";

import CartListItem from "./CartListItem";

import {mapGetters} from 'vuex'

export default {
  name: "CartList",

  
  components: {
    Scroll,
    CartListItem
  },

  data() {
    return {
      cartList: [
        {},
        {},
        {}

      ]
    }
  },

  computed: {
    // ...mapGetters(['cartLength'], ['cartList'])
  },

  activated() {

    //详情页添加数据之后，可以滚动高度发生变化，需要scroll刷新
    this.$refs.carlistrefs.refresh()
  }
}
</script>

<style scoped>
.car-list {
  height: calc(100% - 44px);
}

.content {
  height: 100Vh;
  overflow: hidden;
}
</style>
