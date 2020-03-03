// pages/demo/demo01.js
const app = getApp();

  
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name: '',
    haseUserInfo: false,
    canIUse: wx.canIUse("button.open-type.getUserInfo"),
    userInfo: {},
    items: [
      { name: 'USA', value: '美国' },
      { name: 'CHN', value: '中国', checked: 'true' },
      { name: 'BRA', value: '巴西' },
      { name: 'JPN', value: '日本' },
      { name: 'ENG', value: '英国' },
      { name: 'FRA', value: '法国' },
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      this.setData({
        name:"hello"
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
  getUserInfo: function(e){
    console.log(e.detail.userInfo)
    this.setData({
      userInfo: e.detail.userInfo,
      name: this.data.userInfo.nickName
    })

    console.log(this.data.userInfo.nickName)
  },
  radioChange: function(e){
    console.log(e.detail.value)
    console.log(this.data.items.find((function(value,index,arr ){ return e.detail.value===value.name})))
    let {name , value} = this.data.items.find((value,index,arr)=>{
      console.log('value:' + value.name)
      return e.detail.value==value.name} )
    console.log(name)
  }
})