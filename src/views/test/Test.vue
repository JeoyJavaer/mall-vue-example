<template>

</template>

<script>
import {mapGetters} from 'vuex'

export default {
  name: "Test",


  computed:{
    // ...mapGetters(['cartLength'],['cartList']),
    ...mapGetters({
      length:'cartLength',
      list:'cartList'
    })


  }
}
</script>

<style scoped>

</style>
