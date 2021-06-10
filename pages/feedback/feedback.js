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
    windowHeight: app.globalData.windowHeight, //手机高度
    phone: '',
    sentTag:'',
    sentText:'',
    lists:[
      {id:0, tagColor: '#535b72', bgColor: '#f3f6ff', tagtext:'功能异常'},
      {id:1, tagColor: '#535b72', bgColor: '#f3f6ff', tagtext:'产品建议'},
      {id:2, tagColor: '#535b72', bgColor: '#f3f6ff', tagtext:'我要吐槽'},
      {id:3, tagColor: '#535b72', bgColor: '#f3f6ff', tagtext:'其他问题'}
    ], 
    count1:0,
    count2:0,
    count3:0,
    count4:0,
   //字数限制
   maxWord: 300,
   currentWord: 0,
   isSent: true // true代表不能发送
  },
  onChange(event) {
    this.setData({
       phone: '【'+event.detail+'】'
     })
  },
  toTag: function(e){
     var newlists = this.data.lists;
     let id = e.currentTarget.dataset.id;
     console.log("id",id);
     for(var i=0; i<4; i++){
      newlists[i].bgColor =  '#f3f6ff';
      newlists[i].tagColor = '#535b72';
    }
     if(id == 0){
      this.setData({
        count2:0,
        count3:0,
        count4:0,
       })
        if(this.data.count1++%2 == 0){
          newlists[id].bgColor =  '#e5faff';
          newlists[id].tagColor = '#00cafc';
          this.setData({
            lists: newlists,
            sentTag:'【功能异常】'
          })
        }else{
          newlists[id].bgColor =  '#f3f6ff';
          newlists[id].tagColor = '#535b72';
          this.setData({
            lists: newlists,
            sentTag:''
          })
        }
     }else if(id == 1){
      this.setData({
        count1:0,
        count3:0,
        count4:0,
       })
      if(this.data.count2++%2 == 0){
        newlists[id].bgColor =  '#e5faff';
        newlists[id].tagColor = '#00cafc';
        this.setData({
          lists: newlists,
          sentTag:'【产品建议】'
        })
      }else{
        newlists[id].bgColor =  '#f3f6ff';
        newlists[id].tagColor = '#535b72';
        this.setData({
          lists: newlists,
          sentTag:''
        })
      }
     }else if(id == 2){
      this.setData({
        count2:0,
        count1:0,
        count4:0,
       })
      if(this.data.count3++%2 == 0){
        newlists[id].bgColor =  '#e5faff';
        newlists[id].tagColor = '#00cafc';
        this.setData({
          lists: newlists,
          sentTag:'【我要吐槽】'
        })
      }else{
        newlists[id].bgColor =  '#f3f6ff';
        newlists[id].tagColor = '#535b72';
        this.setData({
          lists: newlists,
          sentTag:''
        })
      }
     }else{
      this.setData({
        count2:0,
        count3:0,
        count1:0,
       })
      if(this.data.count4++%2 == 0){
        newlists[id].bgColor =  '#e5faff';
        newlists[id].tagColor = '#00cafc';
        this.setData({
          lists: newlists,
          sentTag:'【其他问题】'
        })
      }else{
        newlists[id].bgColor =  '#f3f6ff';
        newlists[id].tagColor = '#535b72';
        this.setData({
          lists: newlists,
          sentTag:''
        })
      }
     }
     console.log("---------------",this.data.sentTag);
     if(this.data.currentWord && this.data.sentTag){
      this.setData({
         isSent: false
      })
    }else{
     this.setData({
       isSent: true
    })
    }
  },
  limitWord: function (e) {//字数限制
    if(e.detail.value && this.data.sentTag){
      this.setData({
         isSent: false
      })
    }else{
     this.setData({
       isSent: true
    })
    }
    var that = this;
    var value = e.detail.value;
    that.setData({
      sentText:e.detail.value
    })
    var wordLength = parseInt(value.length); //解析字符串长度转换成整数。
    if (that.data.maxWord < wordLength) {
      return;
    }
    that.setData({
      currentWord: wordLength
    });
  },
  submit: function(){
    content = this.data.sentTag + this.data.phone + this.data.sentText;
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