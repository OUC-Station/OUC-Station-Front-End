// pages/feedback/feedback.js
import Dialog from '@vant/weapp/dialog/dialog';
const app = getApp();
var content = ''; //反馈内容
var url = app.globalData.urlPath;
Page({

  /**
   * 页面的初始数据
   */
  data: {
   //字数限制
   maxWord: 500,
   currentWord: 0,
  },

  limitWord: function (e) {//字数限制
    var that = this;
    var value = e.detail.value;
    content = e.detail.value;
    var wordLength = parseInt(value.length); //解析字符串长度转换成整数。
    if (that.data.maxWord < wordLength) {
      return;
    }
    that.setData({
      currentWord: wordLength
    });
  },
  submit: function(){
    console.log("-------------------------------",content)
    Dialog.confirm({
      message: '确定提交',
    })
      .then(() => {
        // on confirm
            wx.request({
              url: url+'/api/suggestion/post_suggestion',
              method: "POST",
               header: {
                     "Content-Type":"application/json;charset=UTF-8",
                     'cookie': wx.getStorageSync("cookie")
              },
              data: {
                content: content
              },
              success: function (res) {
                 console.log(res);
                 wx.showToast({
                  title: '提交成功，感谢您的反馈！',
                  icon:'none',
                  duration: 1500,
                  success:function(){
                    setTimeout(function(){
                     wx.navigateBack({})
                  },1500);
                  }
                })
              },
            })
      })
      .catch(() => {
        // on cancel
        console.log("取消删除")
      });
  },
  /**
   * 生命周期函数--监听页面加载
   */
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