const westinfo = require('../../config/westinfo.js')
const southinfo = require('../../config/southinfo.js')
const site = require('../../config/site.js')
Page({
  data: {
    active: 1,
    latitude: 36.16404491277912,
    longitude: 120.50059948905732,
    //latitude: 36.16381384970564,  //默认定位经度
    //longitude: 120.49716213967224, //默认定位维度
    markers: site.site
  },
  
  onChange(event) {
    let that = this;
   if(event.detail.name == 1){//西线
      that.setData({
        polyline: [{
          points: westinfo.path,
          color: "#a885d5",
          width: 5,
          borderColor: '#414f3e',
          borderWidth: 1
        }],
      })
   }else{ //南线
    that.setData({
      polyline: [{
        points: southinfo.path,
        color: "#a885d5",
        width: 5,
        borderColor: '#414f3e',
        borderWidth: 1
      }],
    })
   }
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
  
  },
  bindmarkertap: function(e){//跳转到地图详情
    console.log("此时点击了：",e.detail.markerId)
    var markerId = e.detail.markerId;
    wx.navigateTo({
      url: '/pages/mapdetail/mapdetail?markerId=' + markerId
    })
  }
})
