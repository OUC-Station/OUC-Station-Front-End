// pages/forumdetail/forumdetail.js
const moment = require('../moment_modules/moment/moment.js');
moment.locale('zh-cn');
var app = getApp();
var url = app.globalData.urlPath;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    identity: null,
    permit: 0,
    meid: 0,
    isNull:0, //当输入框有内容时才出现发送按钮
    inputText:'',
    inputText:'',
    json: null
  },

  getInputText: function (e) {
    this.setData({
      inputText: e.detail.value
    })
    var that = this;
    let pinglun = this.data.inputText
     if (pinglun == ''){
     that.setData({
         isNull:0
      })
     }else{
      that.setData({
         isNull:1
      })
   }
  },

//输入聚焦
focus: function (e) {
  var that = this;
    that.setData({
    inputBottom: e.detail.height
   })
},
//失去聚焦
  blur: function (e) {
     var that = this;
     that.setData({
     inputBottom: 0
    })
},
  //用户输入内容--提交输入
 submit:function(){
  if(app.globalData.isregister == 1){
     let item = this.data.json
     console.info(that.data.inputText);
     if (!that.data.inputText){
      wx.showToast({
        icon:'none',
        title:'请输入内容'
        })
        return false;
    }

  wx.request({
    url: url+'/api/bbs/post_comment',     
    header: {
      "Content-Type":"application/json;charset=UTF-8",
      'cookie': wx.getStorageSync("cookie")
              },
    method: 'POST',
  data: {
      meid: this.data.meid ,
      commenterid:openid,
      content:that.data.inputText,
  },
  success: function (res) {
    console.log("succeed in connecting");
    console.log(res);
    if(res.data.result == "success"){
      wx.showToast({
        title: '评论成功~',
        icon:  'none',
        duration: 2000
      })
      
    }else if(res.data.result == "false"){
      wx.showToast({
        title: '评论失败',
        icon:  'none',
        duration: 2000
      })
      
    }
    that.getPL();
    that.setData({
      inputText: ''
    })
  },
  fail: function (res) {
    wx.showToast({
      title: '评论失败~',
      icon: 'none',
      duration: 1000
    })
    console.log("fail to connect");
  }
  
})
}else{
  wx.showToast({
    title: '请先注册',
    icon: 'none',
    duration: 1000
  })
}
},
  

  onLoad: function (options) {
    //let that = this;
    let topic_id = options.topic_id;
    console.log("选课论坛那评论详情topic_id：------------->",topic_id)
    this.data.meid = topic_id;

   wx.request({
        url: url+'/api/bbs/get_topic_detail',
         method: "GET",
         header: {
            "Content-Type":"application/json;charset=UTF-8" 
         },
         data: {
            topic_id: topic_id
         },
      success: function (res) {
        console.log("评论详情的",res)
      },
    })
  },
})