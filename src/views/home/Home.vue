<template>
  <div class="home">
    <nav-bar class="home-nav-bar">
      <div slot="center">购物街</div>
    </nav-bar>
    <div class="home-scroll">
      <scroll class="content" ref="scroll" :probe-type="3">
        <div>
          <home-swiper :banners="banners" @swiperimageload="swiperimageload"/>
          <recommend-view :recommends="recommends"/>
          <home-feature/>
          <tab-control class="tab-control"
                       :titles="['流行','新款','精选']"
                       @tabClick="tabClick"
                       ref="tabcontrol"/>
          <goods-list-view :goods="showGoods"/>
        </div>
      </scroll>
    </div>
<!--    <back-top @click.native="backClick"/>-->

    <scroll class="content" ref="scroll" :probe-type="3" @scroll="contentScroll" :pullUpLoad="true"
            @pullingUp="loadMore">
      <HomeSwiper :banners="banners"/>
      <home-swiper :banners="banners" @swiperimageload="swiperimageload"/>
      <recommend-view :recommends="recommends"/>
      <home-feature/>
      <tab-control class="tab-control"
                   :titles="['流行','新款','精选']"
                   @tabClick="tabClick"
                    ref="tabcontrol"/>
      <goods-list-view :goods="showGoods"/>
    </scroll>
    <back-top @click.native="backClick" v-show="shouldShowBackTop"/>
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
import {debounce} from "@/common/utils";


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


      shouldShowBackTop: false,
      currentType: 'pop',
      tabOffsetTop:0,
      saveY:0
    }
  },

  computed: {
    showGoods() {
      return this.goods[this.currentType].list
    },

  },

  created() {

    this.homeMultiDataGet()

    //请求商品函数
    this.homeGoodsGet('pop')
    this.homeGoodsGet('new')
    this.homeGoodsGet('sell')
  },

  mounted() {
    //监听图片加载完成
    const refresh = debounce(this.$refs.scroll.refreshScroll, 1000)
    this.$bus.$on('itemImageLoad', () => {
      console.log('imageLoad');
      refresh()
    })
  },


  //页面显示
  activated() {
    if (this.saveY > 0) {
      this.$refs.scroll.scrollPosition(0, this.saveY, 0) //滚动到指定位置

      //TODO  舒刷新数据  refresh (代码同步之后改)
    }
  },


  //页面离开
  deactivated() {
    //开始保存位置
    this.saveY = this.$refs.scroll.getCurrentPositionY()
  },

  methods: {

    swiperimageload() {
      /*所有的组件都有这个属性$el，可以获取到组件内的元素*/
      /*这里获取到的数据，有可能是图片没有加载完成的，需要监控所有图片加载完成之后设置数据，轮播/feature/列表*/
      // this.offsetTop = this.$refs.tabcontrol.$el.offsetTop
      console.log(this.offsetTop);
    },


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

    contentScroll(position) {
      this.shouldShowBackTop = (-position.y) > 1000
    },

    loadMore() {
      console.log('loadMore');
      this.homeGoodsGet(this.currentType)
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
        this.$refs.scroll.finishPullUp()
      }).catch(err => {
        console.log('getHomeGoods:' + type + err);
      })
    }
  }
}
</script>

<style scoped>

.home{
  height: 100Vh;
}
.home-scroll {
  height: 100Vh;
}

.content {
  height: calc(100% - 44px - 49px);
  overflow: hidden;
}


.home-nav-bar {
  background: var(--color-tint);
  color: white;

  z-index: 9;
}

.tab-control {
  /*设置停留的属性*/
  /*position: sticky;*/
  top: 44px;
  z-index: 9;
}


</style>
