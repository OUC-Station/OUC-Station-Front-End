// pages/forum/forum.js
var app = getApp();
var url = app.globalData.urlPath;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    lists: []
  },

  
    //点击跳转到详情页
    toDetail: function (e) {
      let item = e.currentTarget.dataset.item;
      console.log("item数据为:", item);
      let str = JSON.stringify(item)
      var encodeData = encodeURIComponent(JSON.stringify(item));// 对数据字符串化并转码，防止特殊字符影响传参
      wx.navigateTo({
        url: '/pages/forumdetail/forumdetail?jsonStr=' +encodeData
      })
    },
  
     //跳转到发布页面
    toPost: function () {
        wx.navigateTo({
          url: '/pages/postmsg/postmsg'
        })
    },
  
    onLoad: function (options) {
    },
  
    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {
  
    },
  
    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {
      let that = this;
      //获取数据
      wx.request({
        url: url+'/api/bbs/get_topics',
        method: "GET",
        header: {
          "Content-Type": "application/x-www-form-urlencoded"   
        },
        data: {
          
        },
        success: function (res) {
          console.log("RES",res)
          var listall = JSON.parse(res.data);
          console.log("选课论坛----------》",listall)
          for(var i=0; i<listall.length; i++){
            listall[i].time = moment(listall[i].time).calendar();
           }
          //setTimeout(() => {
            that.setData({
              lists: listall,
            });
            //隐藏 加载中的提示
           // wx.hideLoading();
         // }, 1500)
        },
      })
    }
})