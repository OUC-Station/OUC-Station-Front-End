// pages/empower/empower.js
//获取应用实例
const app = getApp()
var url = app.globalData.urlPath;
Page({
    data: {
        //判断小程序的API，回调，参数，组件等是否在当前版本可用。
        canIUse: wx.canIUse('button.open-type.getUserInfo'),
        isHide: true
    },

    onLoad: function() {
     
    },
    getUserProfile(){
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
    }
})
