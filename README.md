# 电动车租赁小程序

一个基于微信小程序的电动车租赁展示与咨询项目，聚焦本地门店租车场景，支持车型浏览、搜索筛选、销量统计、车辆详情与一键联系店铺。

## 功能概览

- 首页展示门店信息与轮播车型图，可直接搜索车型或续航关键词。
- 车辆页支持按分类筛选（全部/外卖车/代步车）和关键词搜索（品牌、车型）。
- 详情页展示车辆参数、价格、备注说明，并支持一键拨打门店电话。
- 统计页按销量排序展示车型热度，并支持跳转查看车辆详情。
- 关于页展示门店介绍、地址、联系电话，支持复制地址与电话联系。

## 页面结构

`app.json` 中已注册页面如下：

- `pages/index/index`：首页
- `pages/vehicle/vehicle`：车辆列表页（Tab）
- `pages/vehicle-detail/vehicle-detail`：车辆详情页
- `pages/statistics/statistics`：销量统计页（Tab）
- `pages/about/about`：关于我们页（Tab）
- `pages/logs/logs`：默认日志页

## 数据说明

核心数据位于 `utils/data.js`，主要包含：

- `banners`：首页轮播数据
- `categories`：车辆分类
- `vehicles`：车型列表（价格、续航、电池、销量等）
- `storeInfo`：门店基础信息（名称、介绍、地址、电话、营业时间）

### 车辆字段示例

`vehicles` 每个对象常用字段：

- `id`：车型唯一标识
- `categoryId`：分类标识（如 `delivery`、`commuter`）
- `name`、`brand`：车型和品牌
- `price`、`priceUnit`、`pricePerDay`：租金信息
- `voltage`、`range`、`battery`：车辆参数
- `note`：主备注
- `remarks`：额外说明数组（例如“保险平台另外支付”“基础服务费30元（月）”）
- `images`：详情轮播图
- `sales`：销量数据（用于统计页）

详情页会将 `note` 与 `remarks` 合并后按分条样式展示。

## 运行方式（微信开发者工具）

1. 打开微信开发者工具。
2. 选择“导入项目”。
3. 项目目录选择当前目录：`miniprogram-1`。
4. AppID 可使用测试号或你自己的小程序 AppID。
5. 导入后编译运行。

## 技术栈与配置

- 原生微信小程序（JS + WXML + WXSS）
- `style: v2`
- `componentFramework: glass-easel`
- 通过 `App.globalData.searchKeyword` 在页面间传递搜索词

## 业务内容补充（当前门店文案）

- 提供外卖款与代步款包月租赁服务。
- 支持日租长续航车。
- 可覆盖哈达门森林公园、敕勒川草原、脑包网红村、国家级登山道等路线。
- 支持双人往返续航场景（以实际路况与车辆状态为准）。

## 后续可扩展建议

- 增加“预约租车”表单与提交能力。
- 将 `utils/data.js` 迁移到云函数或后端接口，支持动态管理车型。
- 增加筛选维度（价格区间、电池类型、是否免押）。
- 增加管理员维护页面（车型上下架、销量更新、备注维护）。
