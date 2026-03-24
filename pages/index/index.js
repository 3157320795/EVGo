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
  onBannerTap(e) {
    const id = e.currentTarget.dataset.id
    if (!id) return
    wx.navigateTo({ url: `/pages/vehicle-detail/vehicle-detail?id=${id}` })
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
