<template>
  <div class="toast" v-show="show">
    <div>
      {{ message }}
    </div>
  </div>
</template>

<script>
export default {
  name: "Toast",

  data() {
    return {
      msg: '',
      show: false
    }
  },

  methods: {
    toast(msg, time = 1500) {
      this.message = msg
      this.show = true
      setTimeout(() => {
        this.show = false
        this.msg=''
      }, time)
    }
  }
}
</script>

<style scoped>
.toast {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 5px 10px;

  color: white;
  background-color: #666666;
}
</style>
