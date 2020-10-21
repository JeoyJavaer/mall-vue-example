import {
  SET_TABBAR_SHOW,
  ADD_COUNTER,
  ADD_TO_CAR
} from "@/store/store-types";

export default {
  [SET_TABBAR_SHOW](state, payload) {
    console.log(payload);
  },

  [ADD_COUNTER](state, payload) {
    payload++
  },


  [ADD_TO_CAR](state, item) {
    item.count = 1
    state.carList.push(item)
  }


}
