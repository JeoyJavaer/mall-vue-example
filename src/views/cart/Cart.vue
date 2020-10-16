<template>
  <div id="cart">
    <scroll ref="scrollcart" class="content">
      <ul>
        <li>这是要展示的数据1</li>
        <li>这是要展示的数据100</li>
      </ul>
    </scroll>
  </div>
</template>

<script>
import Scroll from "@/components/common/scroll/Scroll";

export default {
name: "Cart",
  components:{
    Scroll,
  },

}
</script>

<style scoped>
.content{
  height: 600px;
  background: red;
  overflow: hidden;
}
</style>
