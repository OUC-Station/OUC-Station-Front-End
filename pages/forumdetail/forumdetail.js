// pages/forumdetail/forumdetail.js
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
    console.log(app.globalData.isregister)
     var that = this;
     var openid = app.globalData.openId;
     let item = this.data.json
     console.info(that.data.inputText);
     if (!that.data.inputText){
      wx.showToast({
        icon:'none',
        title:'请输入内容'
        })
        return false;
    }
  //    talkList.push({
  //     who: 2,
  //     text: that.data.inputText
  // })
  // that.setData({
  //     talkList: talkList,
  //     inputText:'',
  //     //inputBottom: 0
  // })
  //    that.scrollToBottom();
  var url = app.globalData.urlPath
  wx.request({
      url: url+'CommentServlet/add',     
  header: {  
          "content-Type": "application/x-www-form-urlencoded"    
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
// this.onLoad(item)
  },
  

  onLoad: function (options) {
    console.log("consultdetail的identity为: " + app.globalData.identity)//前端打印出identity检查 
    this.setData({
      identity: app.globalData.identity
    })
    console.log("options")
    console.log(options)
    let that = this
  
    let item = JSON.parse(decodeURIComponent(options.jsonStr))//解码并且转化为json
    this.data.json = JSON.stringify(item)
    console.log("选课论坛那评论详情：------------->",item)
     console.log("选课论坛那评论详情：------------->",item['id'])
    this.data.meid = item.id;
    pageId = item.id;
    that.setData({
      name: item.name,//姓名
      time:item.time,
      content:item.content,
      nowcount:item.count,
      avatarUrl: item.avatarUrl,
      permit: item.permit
    })
     this.getPL();
  },

 /* 删除所有评论 */
   deleteInfo: function (e) {

  Dialog.confirm({
    message: '确定删除当前评论',
  })
    .then(() => {
      // on confirm
      var url = app.globalData.urlPath;
      var openId = app.globalData.openId;
       wx.request({
                    url: url+'MessageServlet/delete',
                    method: "POST",
                    header: {
                      "content-Type": "application/x-www-form-urlencoded"  
                    },
                    data: {
                      id: pageId,
                      openid: openId
                    }, 
                    success: function (res) {
                      if(res.data.result == "success"){
                        wx.showToast({
                          title: '删除成功~',
                          icon:  'none',
                          duration: 2000
                         })
            
                      }else if(res.data.result == "false"){
                          wx.showToast({
                             title: '删除失败',
                            icon:  'none',
                            duration: 2000
                     })
            
          }
                      wx.switchTab({
                          url: '/pages/consult/consult',
                          success: function(){
                            let page = getCurrentPages().pop(); //跳转页面成功之后
                            if (!page) return;
                            page.onLoad(); //如果页面存在，则重新刷新页面
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

  /* 删除评论下的评论 */
  deletePL: function (e) {
    Dialog.confirm({
      message: '确定删除此评论',
    })
      .then(() => {
        // on confirm
        var id = e.currentTarget.dataset.id;
        console.log("id为：",id)
        var url = app.globalData.urlPath;
        var openId = app.globalData.openId;
        wx.request({
          url: url+'CommentServlet/delete',
          method: "POST",
          header: {
            "content-Type": "application/x-www-form-urlencoded"  
          },
          data: {
            id: id,
            openid: openId
          },
          success: function (res) {
            if(res.data.result == "success"){
              wx.showToast({
                title: '删除成功~',
                icon:  'none',
                duration: 2000
              })
              
            }else if(res.data.result == "false"){
              wx.showToast({
                title: '删除失败',
                icon:  'none',
                duration: 2000
              })
              
            }
            console.log(res.data)     
                              let page = getCurrentPages().pop(); 
                              if (!page) return;
                              page.getPL(); 

                    },
        })
      })
      .catch(() => {
        // on cancel
        console.log("取消删除")
      });
  },
  getPL: function(){
    let that = this
    var url = app.globalData.urlPath;
    var openId = app.globalData.openId;
    //获取数据
    wx.request({
     url: url+'CommentServlet/getlist',
     method: "POST",
     header: {
       "Content-Type": "application/x-www-form-urlencoded"   
     },
     data: {
       id: pageId,
       openid: openId
     },
     success: function (res) {
       console.log("获取的评论数据为------------>:",JSON.parse(res.data))
       var listall = JSON.parse(res.data);
       that.setData({
         nowcount: JSON.parse(res.data).length
       })
       for(var i=0; i<listall.length; i++){
         listall[i].time = moment(listall[i].time).calendar();
        }
       setTimeout(() => {
         that.setData({
           lists: listall
         });
         //隐藏 加载中的提示
         wx.hideLoading();
       }, 1500)
     },
   })
  }
})