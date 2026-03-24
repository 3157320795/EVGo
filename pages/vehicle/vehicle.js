const { categories, vehicles } = require('../../utils/data.js')

function filterVehicles(list, categoryId, keyword) {
  let r = list
  if (categoryId && categoryId !== 'all') {
    r = r.filter(v => v.categoryId === categoryId)
  }
  const k = (keyword || '').trim()
  if (k) {
    r = r.filter(v =>
      (v.name && v.name.indexOf(k) !== -1) ||
      (v.brand && v.brand.indexOf(k) !== -1)
    )
  }
  return r
}

Page({
  data: {
    categories,
    vehicles,
    filteredList: vehicles,
    activeCategory: 'all',
    keyword: ''
  },

  onLoad() {},
  onShow() {
    const app = getApp()
    const k = app.globalData.searchKeyword || ''
    if (k !== undefined && k !== '') {
      app.globalData.searchKeyword = ''
      const filteredList = filterVehicles(this.data.vehicles, this.data.activeCategory, k)
      this.setData({ keyword: k, filteredList })
    }
  },

  onSearchInput(e) {
    const keyword = e.detail.value || ''
    const filteredList = filterVehicles(this.data.vehicles, this.data.activeCategory, keyword)
    this.setData({ keyword, filteredList })
  },
  onSearchConfirm() {
    const keyword = (this.data.keyword || '').trim()
    const filteredList = filterVehicles(this.data.vehicles, this.data.activeCategory, keyword)
    this.setData({ keyword, filteredList })
  },

  onCategoryTap(e) {
    const id = e.currentTarget.dataset.id
    const filteredList = filterVehicles(this.data.vehicles, id, this.data.keyword)
    this.setData({ activeCategory: id, filteredList })
  },

  toDetail(e) {
    const id = e.currentTarget.dataset.id
    wx.navigateTo({ url: `/pages/vehicle-detail/vehicle-detail?id=${id}` })
  }
})
