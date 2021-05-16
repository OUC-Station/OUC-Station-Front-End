// index.js
const moment = require('../moment_modules/moment/moment.js');
moment.locale('zh-cn');
const app = getApp()
var url = app.globalData.urlPath;
var page = 1;
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
    ],
    },
    lists:[],
    lastpage: 0
  },
 
 //点击跳转到详情页
 toDetail: function (e) {
  let id = e.currentTarget.dataset.id;
  console.log("id数据为:", id);
  wx.navigateTo({
    url: '/pages/activitydetail/activitydetail?id=' + id
  })
},

  onLoad() {
     var that = this;
     that.loadData(page);
  },

  loadData: function(page){
    var that = this;
    wx.showLoading({
      title: '数据加载中...',
    })
    var oldlists = that.data.lists; // 获取上次加载的数据
    console.log("oldlists",oldlists)
    wx.request({
         url: url+'/api/activity/get_activities_list',
         method: "GET",
         header: {
            "Content-Type":"application/json;charset=UTF-8" 
         },
         data: {
           current: page
         },
         success: function (res) {
              console.log("活动列表数据：",res.data.data)
              var listall = res.data.data.activities;
              for(var i=0; i<listall.length; i++){
               listall[i].cover = url+ listall[i].cover
               }
               for(var i=0; i<listall.length; i++){
                 listall[i].start_time = moment(listall[i].start_time).calendar();
               }
               var newlists = oldlists.concat(listall);
               /*
               var newlists = [];
               for(var i=0; i<listall.length; i++){
                  newlists[i] = oldlists.concat(listall[i])
               }*/
               setTimeout(() => {
                that.setData({
                  lists: newlists,
                  lastpage: res.data.data.total
                });
                wx.hideLoading()
               },1000)
        },
       })
  },
  onReachBottom: function(){
    page++;
    if(this.data.lastpage >= page){
      this.loadData(page);
    }else{
      wx.showToast({
        title: '没有更多数据啦~',
        icon: 'none',
        duration: 1000
      })
    }
  },

})
