<template>
  <di id="home">
    <nav-bar class="home-nav">
    <div slot="center">购物街</div>
    </nav-bar>
  </di>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";

export default {
  name: "Home",
  components: {
    NavBar
  }
}
</script>

<style scoped>
.home-nav{
  background: var(--color-tint);
  color: white;
}


</style>
