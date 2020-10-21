<template>
  <div class="category">
    <scroll class="content">
      <div>
       <div>这是内容</div>
      </div>
    </scroll>
  </div>
</template>

<script>
import Scroll from "@/components/common/scroll/Scroll";

export default {
  name: "Category",
  components: {
    Scroll
  },

  mounted() {


  },
  data() {
    return {
      scroll: null
    }
  }
}
</script>

<style scoped>
.category {
  height: calc(100% - 49px);
}

.content {
  height:100Vh ;
  font-size: 18px;
  overflow: hidden;
}
</style>
