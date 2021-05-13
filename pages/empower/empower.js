// pages/empower/empower.js
//获取应用实例
const app = getApp()

Page({
    data: {
        //判断小程序的API，回调，参数，组件等是否在当前版本可用。
        canIUse: wx.canIUse('button.open-type.getUserInfo'),
        isHide: true
    },

    onLoad: function() {
     
    },
    getUserProfile(){
        wx.getUserProfile({
          desc: '用于完善用户资料',//声明获取用户信息后的用途，后续会展示在弹窗中，请谨慎填写
          success:(res)=>{
              console.log("获取用户信息成功",res)
              let userinfo = res.userInfo
              console.log(userinfo)
              wx.setStorageSync('userinfo', userinfo)
              app.globalData.avatarUrl = userinfo.avatarUrl;
              app.globalData.nickName = userinfo.nickName;
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
                    console.log(res)
                },
                fail: res => {
                    console.log(res)
                }
              })
          },
          fail:res=>{
              console.log("获取用户信息失败",res)
          }
        })
    },
    bindGetUserInfo: function(e) {
        if (e.detail.userInfo) {
            //用户按了允许授权按钮
            var that = this;
            // 获取到用户的信息了，打印到控制台上看下
            console.log("用户的信息如下：");
            console.log(e.detail.userInfo);
            //授权成功后,通过改变 isHide 的值，让实现页面显示出来，把授权页面隐藏起来
          
    
        } else {
              
            //用户按了拒绝按钮
           
        }
    }
})
