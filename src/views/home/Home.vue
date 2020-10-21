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

            <li>sssss1</li>
            <li>sssss2</li>
            <li>sssss3</li>
            <li>sssss4</li>
            <li>sssss5</li>
            <li>sssss6</li>
            <li>sssss7</li>
            <li>sssss8</li>
            <li>sssss9</li>
            <li>sssss10</li>
            <li>sssss11</li>
            <li>sssss12</li>
            <li>sssss13</li>
            <li>sssss14</li>
            <li>sssss15</li>
            <li>sssss16</li>
            <li>sssss17</li>
            <li>sssss18</li>
            <li>sssss19</li>
            <li>sssss20</li>
            <li>sssss21</li>
            <li>sssss22</li>
            <li>sssss23</li>
            <li>sssss24</li>
            <li>sssss25</li>
            <li>sssss26</li>
            <li>sssss27</li>
            <li>sssss28</li>
            <li>sssss29</li>
            <li>sssss30</li>
            <li>sssss31</li>
            <li>sssss32</li>
            <li>sssss33</li>
            <li>sssss34</li>
            <li>sssss35</li>
            <li>sssss36</li>
            <li>sssss37</li>
            <li>sssss38</li>
            <li>sssss39</li>
            <li>sssss40</li>
            <li>sssss41</li>
            <li>sssss42</li>
            <li>sssss43</li>
            <li>sssss44</li>
            <li>sssss45</li>
            <li>sssss46</li>
            <li>sssss47</li>
            <li>sssss48</li>
            <li>sssss49</li>
            <li>sssss50</li>
            <li>sssss51</li>
            <li>sssss52</li>
            <li>sssss53</li>
            <li>sssss54</li>
            <li>sssss55</li>
            <li>sssss56</li>
            <li>sssss57</li>
            <li>sssss58</li>
            <li>sssss59</li>
            <li>sssss60</li>
            <li>sssss61</li>
            <li>sssss62</li>
            <li>sssss63</li>
            <li>sssss64</li>
            <li>sssss65</li>
            <li>sssss66</li>
            <li>sssss67</li>
            <li>sssss68</li>
            <li>sssss69</li>
            <li>sssss70</li>
            <li>sssss71</li>
            <li>sssss72</li>
            <li>sssss73</li>
            <li>sssss74</li>
            <li>sssss75</li>
            <li>sssss76</li>
            <li>sssss77</li>
            <li>sssss78</li>
            <li>sssss79</li>
            <li>sssss80</li>
            <li>sssss81</li>
            <li>sssss82</li>
            <li>sssss83</li>
            <li>sssss84</li>
            <li>sssss85</li>
            <li>sssss86</li>
            <li>sssss87</li>
            <li>sssss88</li>
            <li>sssss89</li>
            <li>sssss90</li>
            <li>sssss91</li>
            <li>sssss92</li>
            <li>sssss93</li>
            <li>sssss94</li>
            <li>sssss95</li>
            <li>sssss96</li>
            <li>sssss97</li>
            <li>sssss98</li>
            <li>sssss99</li>
            <li>sssss100</li>

        </div>
      </scroll>
    </div>
<!--    <back-top @click.native="backClick"/>-->
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

      currentType: 'pop',
      tabOffsetTop: 0,
      saveY: 0
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

  mounted() {

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


    /*监听组件的点击，必须要加.navtive  @click.native*/
    backClick() {
      console.log('点击了');
      // this.$refs.scroll.scroll.scrollTo(0,0,500)
      this.$refs.scroll.scrollPosition(0, 0, 500)
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
