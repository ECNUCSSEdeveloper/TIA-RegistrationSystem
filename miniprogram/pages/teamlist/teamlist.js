// pages/matchlist/matchlist.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    caseList: [
      {
        message: 'foo'
      },
      {
        message: 'bar'
      }
    ],
    dropDownMenuTitle: ['条件筛选'],
    dropDownMenuFourthData: [{ id: 1, title: '智能排序' }, { id: 2, title: '发布时间' }, { id: 3, title: '距离优先' }],//排序数据
    dropDownMenuFirstData: [
      {
        id: 1, title: '按比赛',
        childModel: [
          { id: '11', title: '智慧校园' },
          { id: '12', title: '上海市“气象+”大数据' },
          { id: '13', title: '“互联网+”创新创业大赛' }]
      },
      {
        id: 2, title: '按招募职位',
        childModel: [
          { id: '21', title: 'web前端开发' },
          { id: '22', title: 'Android开发' },
          { id: '23', title: '小程序前端开发' },
          { id: '24', title: 'java后端开发' }]
      },

    ],
    dropDownMenuSecondData: [
      { id: 1, title: '标签11' },
      { id: 2, title: '标签12' }],
    dropDownMenuThirdData: [
      { id: 1, title: '标签11' },
      { id: 2, title: '标签12' }],


  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.request({
      url: 'http://scsse.me/tia/recruit/get/all',
      data: {},
      method: 'POST',
      header: {
        'content-type': 'application/json;charset=utf-8',
      },
      success: function (res) {
        console.log('获得招聘信息列表：' + res.data);
        that.setData({
          recruit: res.data,
        })
      },
      fail: function (res) {
        console.log("Sorry,please try again!")
      }
    })

    var matchFilter = 'dropDownMenuFirstData[0].childModel';
    wx.request({
      url: 'http://scsse.me/tia/match/get/all',
      data: {},
      method: 'POST',
      header: {
        'content-type': 'application/json;charset=utf-8',
      },
      success: function (res) {
        console.log('获得比赛列表：' + res.data);
        that.setData({
          [matchFilter]: res.data,
        })
      },
      fail: function (res) {
        console.log("Sorry,please try again!")
      }
    })

    var jobFilter = 'dropDownMenuFirstData[1].childModel';
    wx.request({
      url: 'http://scsse.me/tia/match/get/all',
      data: {},
      method: 'POST',
      header: {
        'content-type': 'application/json;charset=utf-8',
      },
      success: function (res) {
        console.log('获得比赛列表：' + res.data);
        that.setData({
          [jobFilter]: res.data,
        })
      },
      fail: function (res) {
        console.log("Sorry,please try again!")
      }
    })

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

  },
  selectedFourth: function (e) {
    console.log("选中第" + e.detail.index + "个标签，选中的id：" + e.detail.selectedId + "；选中的内容：" + e.detail.selectedTitle);
  },
  showDialog: function (e) {

  },
  //取消事件
  _cancelEvent: function (e) {
    console.log('你点击了取消');
    this.dialog.hideDialog();
  },
  //确认事件
  _confirmEvent: function (e) {
    console.log('你点击了确定');
    this.dialog.hideDialog();
  }
})