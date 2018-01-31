// pages/fly/fly.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    loading: true,
    result: '',
    latitude: '',
    longitude: '',
    speed: '',
    accuracy: '',
    altitude: '',
    verticalAccuracy: '',
    horizontalAccuracy: ''
  },

  /**
   * 获取高度
   */
  getHeight: function () {
    this.setData({
      loading: true
    });
    let that = this;
    wx.getLocation({
      type: 'wgs84',
      altitude: true,
      success: function (res) {
        console.log('test', res);
        that.setData({
          loading: false,
          // result: 'latitude:' + latitude + ',longitude:' + longitude + ',speed:' + speed + ',accuracy:' + accuracy,
          latitude: res.latitude,
          longitude: res.longitude,
          speed: res.speed,
          accuracy: res.accuracy,
          altitude: res.altitude,
          verticalAccuracy: res.verticalAccuracy,
          horizontalAccuracy: res.horizontalAccuracy
        })
      }
    })

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