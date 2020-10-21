import {
  SET_TABBAR_SHOW,
  ADD_COUNTER,
  ADD_TO_CAR
} from "@/store/store-types";

/**
 * 在做异步操作时可以使用actions，
 * 做复杂业务相关的也可以用actions
 */
export default {

  setCateGoryData(context, data) {
    let list = context.state.carList;
    if (list) {
      let result = list.find(item => {
        return item.id === data.id;
      });

      if (result) {    // 利用actions分发多个commit事件用于调试
        //如果购物车中有这个商品，则数量加一
        context.store.commit(ADD_COUNTER, result);
      } else {
        context.store.commit(ADD_TO_CAR, data);    //如果没有，则增商品
      }
    } else {
      context.store.commit(ADD_TO_CAR, data);
    }
  },


  updateScroll(context,positionY){
    context.state.commit(SET_TABBAR_SHOW,positionY)
  }



}
