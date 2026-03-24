const { vehicles } = require('../../utils/data.js')

Page({
  data: {
    list: [],
    totalSales: 0,
    maxSales: 0,
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
  onLoad() {
    const list = [...vehicles].sort((a, b) => b.sales - a.sales)
    const totalSales = list.reduce((s, v) => s + v.sales, 0)
    const maxSales = list[0] ? list[0].sales : 1
    const listWithPercent = list.map(v => ({ ...v, barPercent: Math.round((v.sales / maxSales) * 100) }))
    this.setData({ list: listWithPercent, totalSales, maxSales })
  },
  toDetail(e) {
    const id = e.currentTarget.dataset.id
    wx.navigateTo({ url: `/pages/vehicle-detail/vehicle-detail?id=${id}` })
  }
})
