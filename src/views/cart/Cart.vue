<template>
  <div class="cart">
    <nav-bar class="cart-nav-bar">
      <div slot="center">购物车({{cartSize}})</div>
    </nav-bar>
    <cart-list/>
  </div>
</template>

<script>

import NavBar from "@/components/common/navbar/NavBar";
import CartList from "@/views/cart/childcomps/CartList";
import {mapGetters} from 'vuex'

export default {
name: "Cart",
  components:{
    CartList,
    NavBar,

  },

  computed:{
    ...mapGetters({
      cartSize:'cartLength',
      cartList:'cartList'
    })
  }

}
</script>

<style scoped>
.cart{
  height: 100Vh;
}

.cart-nav-bar{
  background-color:#ff5777;
  color: white;

}
</style>
