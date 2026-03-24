const { storeInfo } = require('../../utils/data.js')

Page({
  data: {
    storeInfo,
    searchKeyword: ''
  },
  onSearchInput(e) {
    this.setData({ searchKeyword: e.detail.value })
  },
  onSearchConfirm() {
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
  }
})
