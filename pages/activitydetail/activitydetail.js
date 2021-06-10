// pages/activitydetail/activitydetail.js
const moment = require('../moment_modules/moment/moment.js');
moment.locale('zh-cn');
const app = getApp();
var url = app.globalData.urlPath;
var top = Math.round(app.globalData.top*0.85); //胶囊按钮到顶部的距离乘以0.85再四舍五入
var windowWidth = Math.round(app.globalData.windowWidth*0.89);// 手机屏幕宽度乘以0.89再四舍五入
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      top: top
    })
    var that = this;
    let id = options.id;
    console.log("传输过来的id是:",id);

    wx.request({
         url: url+'/api/activity/get_activity_detail',
         method: "GET",
         header: {
            "Content-Type":"application/json;charset=UTF-8" 
         },
         data: {
            activity_id: id
         },
         success: function (res) {
              var listall = res.data.data;
              listall.cover = url+ listall.cover;
             //替换图片链接
              listall.content = listall.content.replace(/<img [^>]*src=['"]([^'"]+)[^>]*>/gi, function (match, capture) {
                  return '<img  src="' + (url + capture) + '"/>';
             });
            //处理图片样式
            listall.content = listall.content.replace(/\<img/g, '<img style="width:' + windowWidth + 'px;height:auto;"');
              console.log("活动列表数据详情：",listall);
              that.setData({
                 cover: listall.cover,
                 title: listall.title,
                 start_time: moment(listall.start_time).calendar(),
                 create_time: moment(listall.create_time).calendar(),
                 content: listall.content
              })
        },
       })
  },
  naviback: function(){
     wx.navigateBack({})
  },
  
  // 获取滚动条当前位置
 onPageScroll: function (e) {
  console.log(e)
  if (e.scrollTop > 100) {
    this.setData({
      floorstatus: true
    });
  } else {
    this.setData({
      floorstatus: false
    });
  }
},
  //回到顶部
goTop: function (e) {  // 一键回到顶部
  if (wx.pageScrollTo) {
    wx.pageScrollTo({
      scrollTop: 0
    })
  } else {
    wx.showModal({
      title: '提示',
      content: '当前微信版本过低，无法使用该功能，请升级到最新微信版本后重试。'
    })
  }
}
})