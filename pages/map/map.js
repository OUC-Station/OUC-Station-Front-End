const info = require('../../config/info.js')
const site = require('../../config/site.js')
var app = getApp();
var url = app.globalData.urlPath;

Page({
  data: {
    latitude: 36.16381384970564,  //默认定位经度
    longitude: 120.49716213967224, //默认定位维度
    polyline: [{
      points: info.path,
      color: "#a885d5",
      width: 5,
      borderColor: '#414f3e',
      borderWidth: 1
    }],
    markers: site.site
  },
  
  points: [
  ],
  recording: false,
  onReady: function (e) {
    this.mapCtx = wx.createMapContext('myMap')
  },
  getCenterLocation: function () {
    this.mapCtx.getCenterLocation({
      success: function(res){
        console.log(res.longitude)
        console.log(res.latitude)
      }
    })
  },
  drawPath: function() {
    let newpath = this.points
    if (newpath.length < 2) return
    this.setData({
      polyline: [{
        points: newpath,
        color: "#a885d5",
        width: 5,
        borderColor: '#414f3e',
        borderWidth: 1
      }]
    })
  },
  bindmaptap: function (e) {
    if (!this.recording) return
    let point = {
      latitude: e.detail.latitude,
      longitude: e.detail.longitude
    }
    this.points.push(point)
    console.log(JSON.stringify(point))
    this.drawPath()
  },
  startRecord: function (e) {
    this.recording = true;
  },
  printPath: function (e) {
    console.log(JSON.stringify(this.points))
  },
  pauseRecord: function (e) {
    this.recording = false;
  },
  stopRecord: function (e) {
    this.recording = false;
    console.log("将以下内容复制到config/info.path即可更新路径")
    this.printPath();
    this.points = []
    console.log("录制结束，路径清空！")
  },
  goback: function() {
    this.points.pop()
    this.drawPath()
  },




  onLoad: function (options) {
    /*
    wx.request({
          url: url+'/api/location/get_locations_list',
          method: "GET",
          header: {
           "Content-Type": "application/x-www-form-urlencoded"   
           },
         data: {
           
         },
         success: function (res) {
             console.log("地图：",res)
              
        },
       })
     */
  },
  bindmarkertap: function(e){//跳转到地图详情
    console.log("此时点击了：",e.detail)
    wx.navigateTo({
      url: '/pages/mapdetail/mapdetail',
    })
  }
})
