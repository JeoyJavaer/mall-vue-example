<template>
  <div class="good-list-item-view">
    <img :src="goodsItem.show.img" alt="" class="img">
    <div class="good-info">
      <p>{{ goodsItem.title }}</p>
      <span class="price">{{ goodsItem.price }}</span>
      <div class="collect">
        <img src="~assets/img/common/home/favourite.svg" class="collect-icon">
        <span>{{ goodsItem.cfav }}</span></div>
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
  padding-top: 20px;
  padding-bottom: 60px;
  position: relative;
  width: 48%;
}

.img {
  width: 100%;
  border-radius: 5px;
}

.good-info {
  font-size: 14px;
  position: absolute;
  bottom: 5px;
  left: 0;
  right: 0;
  overflow: hidden;
  text-align: center;

}

.good-info p {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 3px;
}

.good-info .price {
  /*margin-right: 20px;*/
  color: var(--color-height-text);
}

.good-info .collect {
  position: relative;
  color: var(--color-height-text);
}

.good-info .collect-icon::before {
  content: '';
  position: absolute;
  left: -15px;
  top: -1px;
  width: 14px;
  height: 14px;
  background: 0 0/14px 14px;

}
</style>
