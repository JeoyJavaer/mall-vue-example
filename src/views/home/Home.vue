<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>

    <scroll class="content" ref="scroll" :probe-type="3">
      <HomeSwiper :banners="banners"/>
      <recommend-view :recommends="recommends"/>
      <home-feature/>
      <tab-control class="tab-control"
                   :titles="['流行','新款','精选']"
                   @tabClick="tabClick"/>
      <goods-list-view :goods="showGoods"/>
    </scroll>
    <back-top @click.native="backClick"/>
  </div>
</template>

<script>

import TabControl from "components/content/tabcontrol/TabControl";
import GoodsListView from "components/content/goods/GoodsListView";
import Scroll from "components/common/scroll/Scroll";
import NavBar from "components/common/navbar/NavBar";
import BackTop from "components/content/backtop/BackTop";

import HomeSwiper from "./childcomps/HomeSwiper";

import RecommendView from "views/home/childcomps/HomeRecommendView";
import HomeFeature from "views/home/childcomps/HomeFeature";


import {getHomeMultiata, getHomeGoods} from "@/network/home";



export default {
  name: "Home",
  components: {
    BackTop,
    GoodsListView,
    NavBar,
    TabControl,

    HomeFeature,
    RecommendView,
    HomeSwiper,
    Scroll

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
      },

      currentType: 'pop'
    }
  },

  computed: {
    showGoods() {
      return this.goods[this.currentType].list
    }
  },

  created() {

    this.homeMultiDataGet()

    //请求商品函数
    this.homeGoodsGet('pop')
    this.homeGoodsGet('new')
    this.homeGoodsGet('sell')
  },

  methods: {

    /*事件监听*/
    tabClick(index) {
      // console.log(index);
      switch (index) {
        case 0:
          this.currentType = 'pop'
          break
        case 1:
          this.currentType = 'new'
          break
        case 2:
          this.currentType = 'sell'
          break
      }
    },


    /*监听组件的点击，必须要加.navtive  @click.native*/
    backClick(){
      console.log('点击了');
      // this.$refs.scroll.scroll.scrollTo(0,0,500)
      this.$refs.scroll.scrollPosition(0,0,500)
    },


    /*网络请求*/
    homeMultiDataGet() {
      getHomeMultiata().then(res => {
        // console.log(res);
        this.banners = res.data.banner.list
        this.recommends = res.data.recommend.list
      }).catch(err => {
        console.log('getHomeMultiata' + err);
      })
    },
    homeGoodsGet(type) {
      const page = this.goods[type].page + 1
      getHomeGoods(type, page).then(res => {
        // console.log(res);
        let list = res.data.list;
        // ... 解析函数
        this.goods[type].list.push(...list)
        this.goods[type].page += 1
      }).catch(err => {
        console.log('getHomeGoods:' + type + err);
      })
    }
  }
}
</script>

<style scoped>
#home {

  width: 100vh;
  height: 100vh;

}

/*.content {*/
/*  height: calc(100% - 93px);*/
/*  overflow: hidden;*/
/*  margin-top: 44px;*/
/*}*/

.content{
  overflow: hidden;
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
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
  /*position: sticky;*/
  top: 44px;
  z-index: 9;
}


</style>
