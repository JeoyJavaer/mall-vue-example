<template>
  <div class="tab-control">
    <div v-for="(item,index) in titles" class="tab-control-item" :class="{active:index === currentIndex}" @click="itemClick(index)">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
name: "TabControl",
  props:{
    titles:{
      type:Array,
      default(){
        return []
      }
    }
  },
  data(){
    return{
      currentIndex:0
    }
  },
  methods:{
    itemClick(index){
      if (this.currentIndex === index) {
        console.log("点击了同一tab");
      } else {
        this.currentIndex=index;
        this.$emit('tabClick',index)

      }

    }
  }
}
</script>

<style scoped>
.tab-control{
  display: flex;
  text-align: center;
  font-size: 25px;
  height: 40px;
  line-height: 40px;
  background: white;
}

.tab-control-item{
  flex: 1;

}
.tab-control-item span{
  padding: 5px;
}

.active{
  color: var(--color-height-text);
}

.active span{
  border-bottom: var(--color-height-text) solid 3px;
}
</style>
