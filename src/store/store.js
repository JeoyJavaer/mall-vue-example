import  Vue from 'vue'
import  Vuex from 'vuex'

Vue.use(Vuex)

const  state ={

  carList:[]
}

 const  store =new Vuex.Store({
  state,
  mutations:{
    //直接更新state 里面的数据
  },

  getters:{
    carCounter(state){
     return state.carList.length
    }
  },

  actions:{
    //执行一步操作vue-> actions->mutations
  }


})

export  default
