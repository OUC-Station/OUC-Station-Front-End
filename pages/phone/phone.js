// pages/phone/phone.js
import Dialog from '@vant/weapp/dialog/dialog';
Page({
  data: {
    activeName: '1',
    commonList: [{
        name: '党委主任办公室',
        phone: '0532-66782725'
      },
      {
        name: '后勤服务大厅',
        phone: '0532-66781000'
      },
      {
        name: '网络中心',
        phone: '0532-66782222'
      },
      {
        name: '教材服务中心',
        phone: '0532-66782842'
      },
      {
        name: '崂山校医院',
        phone: '0532-66782440'
      },
      {
        name: '崂山校区校园110报警电话',
        phone: '0532-66782110'
      },
    ],
    logisticsList: [{
        name: '总经理办公室',
        phone: '0532-66786266'
      },
      {
        name: '后勤服务大厅',
        phone: '0532-66781000'
      },
      {
        name: '崂山北海苑管理部办公室',
        phone: '0532-66782508'
      },
      {
        name: '崂山南海苑管理部办公室',
        phone: '0532-68724116'
      },
      {
        name: '崂山东海苑管理部办公室',
        phone: '0532-66782178'
      },
      {
        name: '校医院-崂山校区预防保健科',
        phone: '0532-66782440'
      },
      {
        name: '校医院-崂山校区内科、急诊',
        phone: '0532-66782120'
      },
    ],
    securityList: [{
        name: '处长室',
        phone: '0532-66782252'
      },
      {
        name: '综合科',
        phone: '0532-66782249'
      },
      {
        name: '综合服务大厅',
        phone: '0532-66786280'
      },
      {
        name: '校园110指挥中心',
        phone: '0532-66786110'
      },
      {
        name: '崂山校区校园110报警电话',
        phone: '0532-66782110'
      },
      {
        name: '崂山校区南校门（主）值班室',
        phone: '0532-66786126'
      },
      {
        name: '崂山校区北校门值班室',
        phone: '0532-66782119'
      },
      {
        name: '崂山校区西校门值班室',
        phone: '0532-66782234'
      },
    ],
    academicList: [{
        name: '处长办公室',
        phone: '0532-66782783'
      },
      {
        name: '副处长办公室',
        phone: '0532-66781830'
      },
      {
        name: '招生办公室',
        phone: '0532-66782426'
      },
      {
        name: '本科招办主任办公室',
        phone: '0532-66781608'
      },
      {
        name: '学业与学籍管理科',
        phone: '0532-66782185'
      },
      {
        name: '实验实践教学科',
        phone: '0532-66781676'
      },
      {
        name: '教学运行管理科',
        phone: '0532-66781145'
      },
      {
        name: '教学规划与研究科',
        phone: '0532-66782624'
      },
      {
        name: '通识教育中心办公室',
        phone: '0532-66783618'
      },
      {
        name: '交流生事务管理科',
        phone: '0532-66782425'
      },
      {
        name: '信息化教学中心',
        phone: '0532-66786261'
      },
    ],
    studentList: [{
        name: '处长办公室',
        phone: '0532-66781779'
      },
      {
        name: '副处长办公室',
        phone: '0532-66782762'
      },
      {
        name: '学生资助工作办公室',
        phone: '0532-66782262'
      },
      {
        name: '学生就业创业指导与服务中心',
        phone: '0532-66782140'
      },
      {
        name: '海之子网站',
        phone: '0532-66786000'
      },
    ],
    secretaryList: [{
        name: '基础教学中心',
        phone: '0532-66787105'
      },
      {
        name: '海洋与大气学院',
        phone: '0532-66782372'
      },
      {
        name: '信息科学与工程学部',
        phone: '0532-66781212'
      },
      {
        name: '化学化工学院',
        phone: '0532-66782481'
      },
      {
        name: '海洋生命学院',
        phone: '0532-82032276'
      },
      {
        name: '水产学院',
        phone: '0532-82032961'
      },
      {
        name: '医药学院',
        phone: '0532-82032113'
      },
      {
        name: '食品科学与工程学院',
        phone: '0532-82031639'
      },
      {
        name: '海洋地球科学学院',
        phone: '0532-66786209'
      },
      {
        name: '环境科学与工程学院',
        phone: '0532-66782810'
      },
      {
        name: '工程学院',
        phone: '0532-66786375'
      },
      {
        name: '外国语学院',
        phone: '0532-66787086'
      },
      {
        name: '文学与新闻传播学院',
        phone: '0532-66787053'
      },
      {
        name: '法政学院',
        phone: '0532-66781258'
      },
      {
        name: '管理学院',
        phone: '0532-66782876'
      },
      {
        name: '经济学院',
        phone: '0532-66781855'
      },
      {
        name: '材料科学与工程研究院',
        phone: '0532-66781690'
      },
      {
        name: '数学科学学院',
        phone: '0532-66787153'
      },
      {
        name: '教务处教学运行管理科',
        phone: '0532-66781145'
      },
      {
        name: '教务处教学规划与研究科',
        phone: '0532-66782624'
      },
    ],
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