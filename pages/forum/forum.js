// pages/forum/forum.js
const moment = require('../moment_modules/moment/moment.js');
moment.locale('zh-cn');
var app = getApp();
var url = app.globalData.urlPath;
var page = '';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    lists: [],
    lastpage: 0,
    tipShow: true
  },

  
    //点击跳转到详情页
    toDetail: function (e) {
      let topic_id = e.currentTarget.dataset.topic_id;
      console.log("topic_id数据为:", topic_id);
      wx.navigateTo({
        url: '/pages/forumdetail/forumdetail?topic_id=' + topic_id
      })
    },
  
     //跳转到发布页面
    toPost: function () {
        wx.navigateTo({
          url: '/pages/postmsg/postmsg'
        })
    },
  
  
    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function (){
      page = 1;
      this.setData({
        lists: []
      })
      var that = this;
      that.loadData(page);
    },

    loadData: function(page){
      this.setData({
        tipShow: true
      })
      var that = this;
      var oldlists = that.data.lists; // 获取上次加载的数据
      console.log("oldlists",oldlists)
      wx.request({
            url: url+'/api/bbs/get_topics',
            method: "GET",
            header: {
             "Content-Type": "application/x-www-form-urlencoded"   
             },
           data: {
             current: page
           },
           success: function (res) {
                console.log("活动列表数据：",res.data.data)
                var listall = res.data.data.topics;
                for(var i=0; i<listall.length; i++){
                  listall[i].create_time = moment(listall[i].create_time).calendar();
                 }
                 var newlists = oldlists.concat(listall);
                  that.setData({
                    lists: newlists,
                    lastpage: res.data.data.total
                  });
          },
         })
    },

    onReachBottom: function(){
      page++;
      if(this.data.lastpage >= page){
        this.loadData(page);
      }else{
        this.setData({
          tipShow: false
        })
        wx.showToast({
          title: '没有更多数据啦~',
          icon: 'none',
          duration: 1000
        })
      }
    },
 //下拉刷新
  onPullDownRefresh: function () {
    var page=getCurrentPages().pop();//得到这个页面对象
 
    page.onShow();//调用页面的onLoad()方法进行刷新页面
    wx.stopPullDownRefresh() //刷新成功后停止下拉刷新
  },

})