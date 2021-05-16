// pages/forumdetail/forumdetail.js
const moment = require('../moment_modules/moment/moment.js');
moment.locale('zh-cn');
var app = getApp();
var url = app.globalData.urlPath;
var topic_id = '';
var anonymous = ''; //是否匿名，true为匿名
Page({

  /**
   * 页面的初始数据
   */
  data: {

    switch1 : true,
    identity: null,
    permit: 0,
    meid: 0,
    isNull:0, //当输入框有内容时才出现发送按钮
    inputText:'',
    isShow: null
  },
  onChange(event){
    const detail = event.detail;
    this.setData({
        'switch1' : detail.value
    })
    anonymous = !detail.value;
    console.log("修改后的anonymous:",anonymous);
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
    inputBottom: e.detail.height,
    ipheight: 78,
    isShow: true
   })
},
//失去聚焦
  blur: function (e) {
     var that = this;
     that.setData({
      inputBottom: 0,
     })
     if(that.data.inputText){
        that.setData({
          isShow: true,
          ipheight: 80
        })
     }else{
      that.setData({
        isShow: false,
        ipheight: ''
      })
     }
},
  //用户输入内容--提交输入
 submit:function(){

   let that = this;
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
      topic_id: topic_id ,
      content:that.data.inputText,
      anonymous: anonymous
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

    that.getAll();
    that.setData({
      inputText: '',
      isNull:0
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
},



  onLoad: function (options) {
    anonymous = !this.data.switch1;
    console.log("anonymous: ",anonymous)
    topic_id = options.topic_id;
    console.log("选课论坛那评论详情topic_id：------------->",topic_id);
    this.getAll();
  },
  getAll(){
    let that = this;
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
        var listall = res.data.data.comments;
        for(var i=0; i<listall.length; i++){
          listall[i].create_time = moment(listall[i].create_time).calendar();
         }
        console.log("评论详情的",res.data.data);
        that.setData({
          name: res.data.data.account_nickname,
          avatarUrl: res.data.data.account_avatar,
          time: moment(res.data.data.create_time).calendar(),
          content: res.data.data.content,
          nowcount: res.data.data.comments.length
        })
        that.setData({
           lists: listall
        });
      },
    })
  }
})