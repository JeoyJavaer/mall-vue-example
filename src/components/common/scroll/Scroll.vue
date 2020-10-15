<template>
  <div ref="wrapper">
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'


//ref 如果是绑定在组件中，那么通过this.$refs.refname 获取到的则是组件对象
//    如果是普通的元素中，那么获取到的是元素对象
export default {
  name: "Scroll",
  data() {
    return {
      scroll: null
    }
  },

  props: {
    probeType: {
      type: Number,
      default:0
    }
  },
  methods: {
    scrollPosition(x, y, time = 400) {
      this.scroll.scrollTo(x, y, time)
    }
  },

  mounted() {
    /*这里如果用class wrapper，其他页面也有这个class，则会出现问题，所以不建议这么使用*/
    this.scroll = new BScroll(this.$refs.wrapper, {
      click: true, //如果要div可点击也必须设置为true
      probeType: this.probeType
      // movable: true,
      // zoom:true,
      // probeType:2,
    })

    // 2.监听滚动的区域
    if (this.probeType!==0){
      this.scroll.on('scroll', (position)=>{
        console.log(position);
      })
    }
  }
}
</script>

<style scoped>


</style>
