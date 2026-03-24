const { vehicles, storeInfo } = require('../../utils/data.js')

Page({
  data: {
    detail: null,
    detailRemarks: [],
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
  onLoad(options) {
    const id = parseInt(options.id, 10)
    const detail = vehicles.find(v => v.id === id) || null
    const detailRemarks = detail
      ? [
          ...(detail.note ? [detail.note] : []),
          ...((detail.remarks || []).filter(Boolean))
        ]
      : []
    this.setData({ detail, detailRemarks })
    if (detail) {
      wx.setNavigationBarTitle({ title: detail.name })
    }
  },
  onCall() {
    wx.makePhoneCall({ phoneNumber: this.data.storeInfo.phone })
  }
})
