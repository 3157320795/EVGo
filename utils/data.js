// 轮播图（热销产品，使用实际车辆图）
// 按车型 id 顺序：12、10、7、9、11
const banners = [
  
  { id: 12, image: '/images/daibu/halo2.jpg', title: '哈啰 基础版 代步车' },
  { id: 10, image: '/images/daibu/halo3.jpg', title: '哈啰 续航版 代步车' },
  { id: 11, image: '/images/daibu/jinjian1.jpg', title: '金箭 基础版 代步车' },
  
  { id: 9, image: '/images/waimai/changqiong2.jpg', title: '苍穹 G9 外卖款' },
  { id: 7, image: '/images/waimai/jinjian.jpg', title: '金箭 外卖款' }
]

// 车型分类（外卖车、代步车等）
const categories = [
  { id: 'all', name: '全部' },
  { id: 'delivery', name: '外卖车' },
  { id: 'commuter', name: '代步车' }
]

// 品牌列表（当前在售品牌）
const brands = [
  { id: 'jinjian', name: '金箭' },
  { id: 'heiqishi', name: '黑骑士' },
  { id: 'cangqiong', name: '苍穹' },
  { id: 'haluo', name: '哈啰' }
]

// 价格区间（元/天）
const priceRanges = [
  { id: 'all', label: '全部', min: 0, max: 9999 },
  { id: 'p1', label: '0-30元/天', min: 0, max: 30 },
  { id: 'p2', label: '30-50元/天', min: 30, max: 50 },
  { id: 'p3', label: '50元以上/天', min: 50, max: 9999 }
]

// 车辆列表（实际在售车辆）
const vehicles = [
  {
    id: 7,
    categoryId: 'delivery',
    brand: '金箭',
    brandId: 'jinjian',
    name: '金箭 外卖款',
    voltage: '60V',
    range: '100km',
    price: 800,
    priceUnit: '月',
    pricePerDay: 27,
    battery: '50Ah',
    note: '支付宝信用分560分免押，续航约100公里，60V 50安电池，车架带电池，可无限免费换电，包月800元。',
    remarks: ['保险平台另外支付', '基础服务费30元（月）'],
    image: '/images/waimai/jinjian.jpg',
    images: ['/images/waimai/jinjian.jpg'],
    sales: 188
  },
  {
    id: 11,
    categoryId: 'commuter',
    brand: '金箭',
    brandId: 'jinjian',
    name: '金箭 代步车',
    voltage: '48V',
    range: '50km',
    price: 249,
    priceUnit: '月',
    pricePerDay: 8,
    battery: '20Ah',
    note: '支付宝信用分560分免押，续航约35公里，48V 20安电池，车架带电池，自己充电款，包月249元。',
    remarks: ['保险平台另外支付'],
    image: '/images/daibu/jinjian1.jpg',
    images: ['/images/daibu/jinjian1.jpg','/images/daibu/jinjian2.jpg'],
    sales: 86
  },
  {
    id: 10,
    categoryId: 'commuter',
    brand: '哈啰',
    brandId: 'haluo',
    name: '哈啰 续航版 代步车',
    voltage: '48V',
    range: '35km',
    price: 289,
    priceUnit: '月',
    pricePerDay: 10,
    battery: '20Ah',
    note: '支付宝信用分560分免押，续航约35公里，48V 20安电池，车架带电池，自己充电款，包月289元。',
    remarks: ['保险平台另外支付'],
    image: '/images/daibu/halo3.jpg',
    images: ['/images/daibu/halo3.jpg'],
    sales: 98
  },
  {
    id: 9,
    categoryId: 'delivery',
    brand: '苍穹',
    brandId: 'cangqiong',
    name: '苍穹 G9 外卖款',
    voltage: '60V',
    range: '100km',
    price: 650,
    priceUnit: '月',
    pricePerDay: 22,
    battery: '50Ah',
    note: '支付宝信用分560分免押，续航约100公里，60V 50安电池，车架带电池，可无限免费换电，包月650元。',
    remarks: ['保险平台另外支付'],
    image: '/images/waimai/changqiong2.jpg',
    images: ['/images/waimai/changqiong2.jpg','/images/waimai/changqiong1.jpg'],
    sales: 142
  },
  {
    id: 8,
    categoryId: 'delivery',
    brand: '黑骑士',
    brandId: 'heiqishi',
    name: '黑骑士 H8 外卖款',
    voltage: '60V',
    range: '100km',
    price: 650,
    priceUnit: '月',
    pricePerDay: 22,
    battery: '50Ah',
    note: '支付宝信用分560分免押，续航约100公里，60V 50安电池，车架带电池，可无限免费换电，包月650元。',
    remarks: ['保险平台另外支付'],
    image: '/images/waimai/heiqishi1.jpg',
    images: ['/images/waimai/heiqishi1.jpg','/images/waimai/heiqishi2.jpg'],
    sales: 165
  },
  {
    id: 12,
    categoryId: 'commuter',
    brand: '哈啰',
    brandId: 'haluo',
    name: '哈啰 基础版 代步车',
    voltage: '48V',
    range: '50km',
    price: 219,
    priceUnit: '月',
    pricePerDay: 7,
    battery: '20Ah',
    note: '支付宝信用分560分免押，续航约50公里，48V 20安电池，车架带电池，自己充电款，包月219元。',
    remarks: ['保险平台另外支付'],
    image: '/images/daibu/halo2.jpg',
    images: ['/images/daibu/halo1.jpg','/images/daibu/halo2.jpg'],
    sales: 72
  }
]

// 店铺信息
const storeInfo = {
  name: '绿色出行电动车租赁',
  intro: '专业提供电动自行车租赁服务，车型齐全、价格透明、随租随还。外卖款支持无限免费换电包月，代步款支持自己充电包月，满足短途通勤与配送需求。另提供日租长续航车，支持哈达门森林公园、敕勒川草原、脑包网红村、国家级登山道等路线，双人往返续航。',
  address: '瑞驰出行换电小屋，内蒙古自治区呼和浩特市赛罕区文明路与昭乌达路交叉口正西方向20米左右',
  phone: '19947113894',
  workTime: '周一至周日 8:00-18:00'
}

module.exports = {
  banners,
  categories,
  brands,
  priceRanges,
  vehicles,
  storeInfo
}
