// pages/mapdetail/mapdetail.js
const westsite = require('../../config/westsite.js');
const southsite = require('../../config/southsite.js');
var latitude = ''; //纬度
var longitude = '';//经度
var name = '';//目的地名称
var info = '';//地点信息介绍
var cover = '';//地点封面
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
     windowHeight: app.globalData.windowHeight*0.94, //手机高度*0.94
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      var markerId = options.markerId;
      var route = options.route;
      console.log("跳转后的markerId为：", markerId);
      console.log("跳转后的route为：", route);
      if(route == 1){//西线
        console.log("westsite",westsite.site[markerId]);
        latitude = westsite.site[markerId].latitude;
        longitude = westsite.site[markerId].longitude;
        name = westsite.site[markerId].callout.content;
        info = westsite.site[markerId].info;
        cover= westsite.site[markerId].cover;
        this.setData({
          name: name,
          content: info,
          cover: cover
        })
      }else{//南线
        console.log("southsite",southsite.site[markerId]);
        latitude = southsite.site[markerId].latitude;
        longitude = southsite.site[markerId].longitude;
        name = southsite.site[markerId].callout.content;
        info = southsite.site[markerId].info;
        cover= southsite.site[markerId].cover;
        this.setData({
          name: name,
          content: info,
          cover: cover
        })
      }
  },
  gotoSite: function(){
      console.log("经度：",longitude);
      console.log("纬度：",latitude);
      wx.getLocation({
        type: 'gcj02', //返回可以用于wx.openLocation的经纬度
        success (res) {
          wx.openLocation({
            latitude: latitude,
            longitude:longitude,
            name: name,
            scale: 18,   // 地图缩放级别,整形值,范围从1~28。默认为最大
          })
        }
       })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.mapCtx = wx.createMapContext('myMap')
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})