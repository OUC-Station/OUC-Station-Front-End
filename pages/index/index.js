// index.js
const app = getApp()
var url = app.globalData.urlPath;
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
    
     var that = this;
     wx.request({
          url: url+'/api/activity/get_activities_list',
          method: "GET",
          header: {
             "Content-Type":"application/json;charset=UTF-8" 
          },
          data: {},
          success: function (res) {
               console.log("活动列表数据：",res.data)
         },
        })
      
  }
  
})
