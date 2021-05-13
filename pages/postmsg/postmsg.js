const app = getApp();
var url = app.globalData.urlPath;
var time = ''; //存放任务发布的时间
var content = ''; //任务内容
Page({
  /**
   * 页面的初始数据
   */
  data: {
    //字数限制
    maxWord: 300,
    currentWord: 0,
    
    isDisabled:false,
    content:''
  },

  limitWord: function (e) {//字数限制
    var that = this;
    var value = e.detail.value;
    var wordLength = parseInt(value.length); //解析字符串长度转换成整数。
    if (that.data.maxWord < wordLength) {
      return;
    }
    that.setData({
      currentWord: wordLength
    });
  },

  formSubmit: function (e) {//提交表单信息
    time = util.formatTime(new Date());
    content = e.detail.value.content;
    var openid = app.globalData.openId;
    console.log("发布时间：" + time);//打印任务发布的时间
    console.log("内容：" +content);//打印任务描述的内容
    console.log("openid:",openid)
    this.setData({
      disabled:true //点击发布后按钮不可用
    })
    var url = app.globalData.urlPath
    wx.request({
          url: url+'/api/bbs/post_topic',     
          header: {  
              "content-Type": "application/x-www-form-urlencoded"    
          },
      method: 'POST',
      data: {
        userid:openid,
        content:content,
      },
      success: function (res) {
        console.log("succeed in connecting");
        console.log(res);
        if(res.data.result == "success"){
          wx.showToast({
            title: '发布成功(✪▽✪)',
            icon:  'none',
            duration: 2000
          })
          
        }else if(res.data.result == "false"){
          wx.showToast({
            title: '发布失败',
            icon:  'none',
            duration: 2000
          })
          
        }
        wx.navigateTo({
          url: '/pages/forum/forum',
         
          success(){
            let page = getCurrentPages().pop(); //跳转页面成功之后
            if (!page) return;
            page.onLoad(); //如果页面存在，则重新刷新页面
          }
        })
      },
      fail: function (res) {
        wx.showToast({
          title: '发布失败~',
          icon: 'none',
          duration: 1000
        })
        console.log("fail to connect");
      }
      
    })
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