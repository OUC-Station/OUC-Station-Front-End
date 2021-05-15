// pages/center/center.js
const app = getApp()
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
    wx.removeStorageSync("cookie");
    wx.removeStorageSync("userinfo");
    app.globalData.is_login = false;
    app.globalData.avatar = null;
    app.globalData.nick_name = null;
  },
  login(){
    var that = this;
    app.login();
    wx.getUserProfile({
      desc: '用于完善用户资料',//声明获取用户信息后的用途，后续会展示在弹窗中，请谨慎填写
      success:(res)=>{
          console.log("成功授权，且获取用户信息成功",res)
          let userinfo = res.userInfo
          console.log(userinfo)
          wx.setStorageSync('userinfo', userinfo)
          console.log('cookie: ' + wx.getStorageSync("cookie"))
          wx.request({
            url: 'https://weparallelines.top/api/account/update_user_info',
            method: 'POST',
            header: {
                "Content-Type":"application/json;charset=UTF-8",
                'cookie': wx.getStorageSync("cookie")
                },
             data: {
                encryptedData: res.encryptedData,
                iv: res.iv
             },
             success: res => {
                console.log(res);
                app.is_login();
                wx.switchTab({
                  url: '/pages/index/index',
                  success: function(){
                    that.setData({
                      isLogin: true
                    })
                  }
                })
             },
            fail: res => {
                console.log(res);
            }
          })
          
      },
      fail:res=>{
          console.log("拒绝授权",res);
          wx.removeStorageSync("cookie");
          wx.removeStorageSync("userinfo");
      }
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
    this.setData({
      avatar: app.globalData.avatar,
      nick_name: app.globalData.nick_name,
      isLogin: app.globalData.is_login
    })
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