<template>
  <tab-bar>
    <tab-bar-item  path="/home">
      <img src="~assets/img/common/tabbar/home.svg" alt="" slot="item-icon">
      <img src="~assets/img/common/tabbar/home-active.svg" alt="" slot="item-icon-active">
      <div slot="item-name">首页</div>
    </tab-bar-item>
    <tab-bar-item path="/category">
      <img src="~assets/img/common/tabbar/all.svg" alt="" slot="item-icon">
      <img src="~assets/img/common/tabbar/all-active.svg" alt="" slot="item-icon-active">
      <div slot="item-name">分类</div>
    </tab-bar-item>
    <tab-bar-item path="/cart">
      <img src="~assets/img/common/tabbar/shopping-cart.svg" alt="" slot="item-icon">
      <img src="~assets/img/common/tabbar/shopping-cart-active.svg" alt="" slot="item-icon-active">
      <div slot="item-name">购物车</div>
    </tab-bar-item>
    <tab-bar-item path="/profile">
      <img src="~assets/img/common/tabbar/account.svg" alt="" slot="item-icon">
      <img src="~assets/img/common/tabbar/account-active.svg" alt="" slot="item-icon-active">
      <div slot="item-name">我的</div>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
import TabBar from "components/common/tabbar/TabBar";
import TabBarItem from "components/common/tabbar/TabBarItem";

export default {
  name: "MainTabBar",
  components: {
    TabBarItem,
    TabBar,

  }
}
</script>

<style scoped>

</style>
