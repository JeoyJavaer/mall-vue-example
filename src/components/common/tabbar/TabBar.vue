<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
import TabBarItem from "components/common/tabbar/TabBarItem";

export default {
  name: "TabBar",
  components:TabBarItem
}
</script>

<style scoped>
#tab-bar{
  display: flex;
  height: 49px;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  box-shadow: 0 -1px 1px rgba(100, 100, 100, 0.2);
}
</style>
