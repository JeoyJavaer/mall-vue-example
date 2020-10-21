import Toast from "@/components/common/toast/Toast";

const obj = {}

obj.install = function (Vue) {
  // Vue.extend(Toast)
  // document.body.appendChild(Toast.$el)
  //

  // Vue.prototype.$toast = Toast


  //1创建组件构造器
  const  toastConstructor=Vue.extend(Toast)

  //2 new的方式，根据组件构造器，创建Toast组件
  const  toast = new toastConstructor()

  //3将组件对象，手动挂载到某个元素
  toast.$mount(document.createElement('div'));

  //4 toast.$el就是对应的div
  document.body.appendChild(toast.$el)


  Vue.prototype.$toast= toast


}
export default obj
