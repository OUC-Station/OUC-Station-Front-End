// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    swiper:{
      indicatorDots:true,
      autoplay:true,//自动播放，暂时设置为非自动
      interval:4000,
      circular:true,
      img:[
      {index:0,src:"https://i.loli.net/2021/05/01/x1HvTL2ByFEmzCX.jpg"},
      {index:1,src:"https://i.loli.net/2021/05/01/j2IARGSZrlohvDY.jpg"},
      {index:2,src:"https://i.loli.net/2021/05/01/8P7WTxumOEjnKwA.jpg"}
    ]
    }
  },
 
  onLoad() {
    
  }
  
})
