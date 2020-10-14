<template>
  <div class="good-list-item-view">
    <img :src="goodsItem.show.img" alt="" class="img">
    <div>
      <p>{{ goodsItem.title }}</p>
      <div class="price">{{ goodsItem.price }}</div>
      <div class="collect"><i class="collect-icon"></i>
        <span>{{ goodsItem.cfav}}</span><
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "GoodListItemView",
  props: {
    goodsItem: {
      type: Object,
      default() {
        return {}
      }
    }
  }
}
</script>

<style scoped>
.good-list-item-view {
  width: 49%;
  height: auto;
  padding-top: 6px;
  font-size: 14px;
}

.img {
  width: 100%;
  height: auto;
  border-radius: 4px;
}

.price {
  display: flex;
  justify-content: space-between;
  margin: 6px 0;
}

.collect-icon{
  display: inline-block;
  width: 20px;
  height: 20px;
  /*background: url("~assets/img/home/collect_icon.png") no-repeat;*/
  background-size: cover;
  vertical-align: bottom;
}
</style>
