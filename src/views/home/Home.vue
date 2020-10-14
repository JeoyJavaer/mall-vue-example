<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <HomeSwiper :banners="banners"/>
    <recommend-view :recommends="recommends"/>
    <home-feature/>
    <tab-control class="tab-control" :titles="['流行','新款','精选']"/>
    <goods-list-view :goods="goods['pop'].list"/>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import TabControl from "components/content/tabcontrol/TabControl";
import GoodsListView from "components/content/goods/GoodsListView";


import HomeSwiper from "./childcomps/HomeSwiper";
import RecommendView from "views/home/childcomps/HomeRecommendView";
import HomeFeature from "views/home/childcomps/HomeFeature";


import {getHomeMultiata, getHomeGoods} from "@/network/home";


export default {
  name: "Home",
  components: {
    GoodsListView,
    NavBar,
    TabControl,

    HomeFeature,
    RecommendView,
    HomeSwiper

  },

  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        'pop': {
          page: 0,
          list: []
        },
        'new': {
          page: 0,
          list: []
        },
        'sell': {
          page: 0,
          list: []
        },
      }
    }
  },



  created() {

    this.homeMultiDataGet()

    //请求商品函数
    this.homeGoodsGet('pop')
    this.homeGoodsGet('new')
    this.homeGoodsGet('sell')
  },

  methods:{
    homeMultiDataGet(){
      getHomeMultiata().then(res => {
        // console.log(res);
        this.banners = res.data.banner.list
        this.recommends = res.data.recommend.list
      }).catch(err => {
        console.log('getHomeMultiata' + err);
      })
    },
    homeGoodsGet(type){
      const  page = this.goods[type].page +1
      getHomeGoods(type,page).then(res=>{
        console.log(res);
        let list = res.data.list;
        // ... 解析函数
        this.goods[type].list.push(...list)
        this.goods[type].page +=1
      }).catch(err=>{
        console.log('getHomeGoods:'+type+err);
      })
    }
  }
}
</script>

<style scoped>
#home {
  padding-top: 44px;
}

.home-nav {
  background: var(--color-tint);
  color: white;
  /* 为了防止滚动，固定位置*/
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9;
}

.tab-control {
  /*设置停留的属性*/
  position: sticky;
  top: 60px;
}


</style>
