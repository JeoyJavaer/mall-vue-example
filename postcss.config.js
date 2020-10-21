module.exports={
  plugins:{
    autoprefixer:{},
    "postcss-px-to-viewport":{
      viewportWidth: 375,    //视窗的宽度，对应设计图片的宽度
      viewportHeight: 667,  //
      unitPrecision: 5,// 转换后小数点位数
      viewportUnit: 'vw',//  要转换的单位
      selectorBlackList: ['ignore','tab-bar','tab-bar-item'],//指定不需要转换的类
      minPiøxelValue: 1,//小于 或者等于1px 不转换为视窗单位
      mediaQuery: false//允许在媒体查询中转换px
    }
  }
}
