<template>
  <div class="tab-bar-item" @click="clickItem">
    <div v-if="!isActive">
      <slot name="item-icon"></slot>
    </div>
    <div v-else>
      <slot name="item-icon-active"></slot>
    </div>
    <div :style="activeStyle">
      <slot name="item-name"></slot>
    </div>
  </div>

</template>

<script>
export default {
  name: "TabBarItem",
  props: {
    path: String,
    activeColor: {
      type: String,
      default: 'red'
    }
  },

  computed:{
    isActive(){
      return this.$route.path.indexOf(this.path)!==-1
    },

    activeStyle(){
      return this.isActive?{color:this.activeColor}:{}
    }
  },

  methods:{
    clickItem(){

      console.log('clickItem');
      if (!this.isActive){
        this.$router.push(this.path)
      }
    }
  }
}
</script>

<style scoped>
.tab-bar-item {
  flex: 1;
  text-align: center;
  height: 49px;

}

.tab-bar-item img {
  margin-top: 3px;
  height: 24px;
  width: 24px;
  vertical-align: center;
  margin-bottom: 2px;
}
</style>
