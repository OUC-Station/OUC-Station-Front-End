// app.js
App({
  onLaunch() {
     // 获取手机系统信息，用户自定义导航栏按钮
     wx.getSystemInfo({
      success: res => {
         console.log("导航高度",res)
         this.globalData.windowWidth = res.windowWidth
      }
    })
   let menuButtonObject = wx.getMenuButtonBoundingClientRect();
   console.log("menuButtonObject",menuButtonObject)
   this.globalData.top = menuButtonObject.top;


    var that = this;
    var cookie = wx.getStorageSync("cookie")
    if(cookie){//有cookie字段
        that.is_login()
    }else{ //没有cookie字段，重新登录
      var userinfo = wx.getStorageSync('userinfo')//从缓存信息看用户是否授权了
      console.log("userinfo",userinfo)
      if(userinfo){//有缓存信息，代表已授权，进行已授权登录
          that.login();
          that.UpdateUserInfo();
          that.is_login();
      }else{//没有缓存消息代表要授权登录
          wx.showModal({
            title: '警告',
            content: '不授权登录将无法正常使用小程序的所有功能，是否进行授权？',
            success: function (res) {
            if (res.confirm) {
            console.log('用户点击确定')
            wx.navigateTo({
            url: '/pages/empower/empower', 
             })
             }else{//跳转
              wx.switchTab({
                url: '/pages/index/index', 
                 })
            }
              }
         })
      }
    }
  },


  is_login(){
    var that = this;
    var url = this.globalData.urlPath;
    wx.request({
                 url: url+'/api/account/get_status',
                 method: "GET",
                           header: {
                                  "Content-Type":"application/json;charset=UTF-8",
                                  'cookie': wx.getStorageSync("cookie")
                            },
                  data: {},
                  success: res =>{
                       console.log("is_login里获取的数据：",res)
                       if(res.data.data.is_login){
                            that.globalData.is_login = res.data.data.is_login;
                            that.globalData.nick_name = res.data.data.nick_name;
                            that.globalData.avatar = res.data.data.avatar;
                            //已经登录，不作处理
                       }else{
                             //未登录，重新登录
                             that.login();
                             that.UpdateUserInfo();
                       }
                  },
                })
  },
  UpdateUserInfo(){
    var url = this.globalData.urlPath;
    wx.getUserInfo({
      success:function(res){
          wx.request({
            url: url+'/api/account/update_user_info',
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
                that.globalData.nick_name = res.data.data.nick_name,
                that.globalData.avatar = res.data.data.avatar
                wx.switchTab({
                  url: '/pages/index/index',
                })
             },
            fail: res => {
                console.log(res)
            }
          })
      }
    })
  },
  login(){
    var that = this;
     var url = this.globalData.urlPath;
     wx.login({
       success: res => {
         // 发送 res.code 到后台换取 openId, sessionKey, unionId
          wx.login({
           success: res => {
              if(res.code){
               that.globalData.code = res.code;
               wx.request({
                            url: url+'/api/account/login',
                            method: "POST",
                            header: {
                                  "Content-Type":"application/json;charset=UTF-8"
                             },
                             data: {
                                 code: res.code
                             },
                             success: res =>{
                                  wx.setStorageSync('cookie', res.header['Set-Cookie'])
                             },
                           })
              }else{
                console.log("登录失败！"+ res.errMsg)
              }
            }
          })
       }
     })
  },

  globalData: {
    windowWidth: null, //手机屏幕宽度
    top:null, //胶囊按钮到顶部的距离
    is_login: false,
    avatar: null,
    nick_name: null,
    openId: null,
    code: null,
    urlPath:'https://weparallelines.top',
    topic_id: null
  }
})
