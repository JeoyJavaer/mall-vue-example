/*防抖函数*/
export function debounce(func,delay){
  let timer = null
  return function (...ars){
    if (timer) clearTimeout(timer)

    timer =setTimeout(()=>{
      func.apply(this,ars)
    },delay)
  }
}
