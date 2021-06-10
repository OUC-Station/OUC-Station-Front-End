const westinfo = require('../../config/westinfo.js')
const southinfo = require('../../config/southinfo.js')
const westsite = require('../../config/westsite.js');
const southsite = require('../../config/southsite.js');
var route = ''; //路线, 1为西线
const app = getApp();
Page({
  data: {
    active: 1,
    windowHeight: app.globalData.windowHeight, //手机高度
    //初始信息，以下暂时定为西线
    latitude: 36.16461500000000,
    longitude: 120.49608700000000,
    markers: westsite.site,
    rotate: 224,
    enablerotate: true,
    polyline: [{
      points: westinfo.path,
      color: "#a885d5",
      width: 6,
      borderColor: '#414f3e',
      borderWidth: 1
    }],
  },
  
  onChange(event) {
    let that = this;
    route = event.detail.name;
   if(event.detail.name == 1){//西线
      that.setData({
        latitude: 36.16461500000000,
        longitude: 120.49608700000000,
        markers: westsite.site,
        rotate: 224,
        enablerotate: true,
        polyline: [{
          points: westinfo.path,
          color: "#a885d5",
          width: 6,
          borderColor: '#414f3e',
          borderWidth: 1
        }],
      })
   }else{ //南线
    that.setData({
      latitude: 36.15825700000000,
      longitude: 120.49455300000000,
      markers: southsite.site,
      rotate: -33, //
      enablerotate: true,//
      polyline: [{
        points: southinfo.path,
        color: "#a885d5",
        width: 6,
        borderColor: '#414f3e',
        borderWidth: 1
      }],
    })
   }
  },
  bindmarkertap: function(e){//跳转到地图详情
    console.log("此时点击了：",e.detail.markerId);
    console.log("当前的线路为：",route);
    var markerId = e.detail.markerId;
    wx.navigateTo({
      url: '/pages/mapdetail/mapdetail?markerId=' + markerId + '&route=' + route
    })
  }
})
