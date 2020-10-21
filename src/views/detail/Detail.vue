<template>
  <div class="detail">
    <detail-nav-bar/>
    <detail-swiper :topImages="topImages"/>
    <detail-base-info :goods="goods"/>
  </div>
</template>

<script>
import DetailNavBar from "views/detail/childcom/DetailNavBar";
import DetailSwiper from "views/detail/childcom/DetailSwiper";
import DetailBaseInfo from "views/detail/childcom/DetailBaseInfo";

import {getDetail,Goods} from "@/network/detail";

export default {
  name: "Detail",
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo
  },
  data() {
    return {
      iid: null,
      topImages: [],
      goods: {}

    }
  },
  created() {
    this.iid = this.$route.params.iid
    console.log(this.$route.params.iid);
    this.getProductDetail()

  },

  methods:{
    getProductDetail(){
      getDetail(this.iid).then((res) => {
        const  data= res.result
        console.log(data);
        //获取顶部图片轮播数据
        this.topImages = data.itemInfo.topImages
        this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services);

      })
    }
  }

}
</script>

<style scoped>
.detail{
  height: 100Vh;
}
</style>
