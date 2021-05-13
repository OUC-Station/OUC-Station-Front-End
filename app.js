// app.js
App({
  onLaunch() {
    // 展示本地存储能力
     // 登录
     this.login()
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
                                  console.log(res)
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
    userInfo: null,
    avatarUrl: null,
    nickName: null,
    openId: null,
    code: null,
    urlPath:'https://weparallelines.top'
  }
})
