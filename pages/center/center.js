// pages/center/center.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
     isLogin: true //判断是否登录
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  logout(){
    this.setData({
      isLogin: false
    })
  },
  login(){
      this.setData({
        isLogin: true
      })
  },
  //跳转到使用帮助界面
  gotoInstruction: function () {
    wx.navigateTo({
      url: '/pages/instruction/instruction'
    })
  },
  //跳转到交流论坛
  gotoForum: function () {
    wx.navigateTo({
      url: '/pages/forum/forum'
    })
  },
  //跳转到电话查询界面
  gotoPhone: function () {
    wx.navigateTo({
      url: '/pages/phone/phone'
    })
  },
  //跳转到意见反馈界面
  gotoFeedback: function () {
    wx.navigateTo({
      url: '/pages/feedback/feedback'
    })
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