const app = getApp();
var url = app.globalData.urlPath;
import Dialog from '@vant/weapp/dialog/dialog';
var content = ''; //任务内容
var anonymous = ''; //是否匿名，true为匿名
Page({
  /**
   * 页面的初始数据
   */
  data: {
    switch1 : true,

    //字数限制
    maxWord: 500,
    currentWord: 0,
    
    isDisabled:false,
    content:''
  },

  onChange(event){
    const detail = event.detail;
    this.setData({
        'switch1' : detail.value
    })
    anonymous = !detail.value;
    console.log("修改后的anonymous:",anonymous);
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
    let that = this;
    Dialog.confirm({
      message: '确定发布此评论',
    })
      .then(() => {
        content = e.detail.value.content;
        console.log("内容：" +content);//打印任务描述的内容
        this.setData({
          disabled:true //点击发布后按钮不可用
        })
    
        wx.request({
              url: url+'/api/bbs/post_topic',     
              header: {
                "Content-Type":"application/json;charset=UTF-8",
                'cookie': wx.getStorageSync("cookie")
                  },
          method: 'POST',
          data: {
            title: '1',
            content: content,
            anonymous: anonymous
          },
          success: function (res) {
            console.log("succeed in connecting");
            console.log(res);
            
            that.setData({
              inputText: ''
            })
            wx.navigateBack({
              success: function(){
                let page = getCurrentPages().pop(); //跳转页面成功之后
                if (!page) return;
                page.onShow(); //如果页面存在，则重新刷新页面
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
      })
      .catch(() => {
        // on cancel
        console.log("取消发布")
      });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    anonymous = !this.data.switch1;
    console.log("anonymous: ",anonymous)
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