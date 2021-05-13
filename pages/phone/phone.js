// pages/phone/phone.js
import Dialog from '@vant/weapp/dialog/dialog';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    activeName: '1',
    lists:[
      {name:'党委书记办公室', phone:'0532-66782728'},
      {name:'院长办公室', phone:'0532-66782627'},
      {name:'学院办公室', phone:'0532-66781128'},
      {name:'主任办公室', phone:'0532-66782628'},
      {name:'综合科', phone:'0532-66782249'},
      {name:'崂山校区南校门值班室', phone:'0532-66782110'},
      {name:'崂山校区北校门值班室', phone:'0532-66782119'},
      {name:'校园110指挥中心', phone:'0532-66782110'},
      {name:'综合服务大厅', phone:'0532-66782280'}
    ]
  },

  toCall: function (e) {
    let phone = e.currentTarget.dataset.item.phone;
    console.log("phone数据为:", phone);

    Dialog.confirm({
      message: '是否拨打'+ e.currentTarget.dataset.item.name + '电话？',
    })
      .then(() => {
        // on confirm
        console.log("确定")
        wx.makePhoneCall({
          phoneNumber: phone
        })
      })
      .catch(() => {
        // on cancel
        console.log("取消")
      });
  },
  onChange(event) {
    this.setData({
      activeName: event.detail,
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