<template>
<div class="goods">
  <good-list-item-view v-for="(item,index) in goods" :goods-item="item" :key="index"/>
</div>
</template>

<script>
import GoodListItemView from "@/components/content/goods/GoodListItemView";
export default {
  name: "GoodsListView",
  components: {GoodListItemView},
  props:{
    goods:{
      type:Array,
      default (){
        return []
      }
    }
  }

}
</script>

<style scoped>
.goods{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

</style>
