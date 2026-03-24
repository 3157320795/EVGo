const { banners, storeInfo } = require('../../utils/data.js')

Page({
  data: {
    banners,
    storeInfo,
    searchKeyword: ''
  },
  onLoad() {},
  onSearchInput(e) {
    this.setData({ searchKeyword: e.detail.value })
  },
  onSearchConfirm() {
    const k = (this.data.searchKeyword || '').trim()
    getApp().globalData.searchKeyword = k
    wx.switchTab({ url: '/pages/vehicle/vehicle' })
  },
  toVehicleList() {
    const k = (this.data.searchKeyword || '').trim()
    getApp().globalData.searchKeyword = k
    wx.switchTab({ url: '/pages/vehicle/vehicle' })
  },
  onCall() {
    wx.makePhoneCall({ phoneNumber: this.data.storeInfo.phone })
  },
  onCopyAddress() {
    wx.setClipboardData({
      data: this.data.storeInfo.address,
      success: () => wx.showToast({ title: '地址已复制' })
    })
  },
  onCopyPhone() {
    wx.setClipboardData({
      data: this.data.storeInfo.phone,
      success: () => wx.showToast({ title: '电话已复制' })
    })
  }
})
