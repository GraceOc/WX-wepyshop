// 导入根路径和封装的发送请求的方法
import wxRequest from '../utils/wxRequest'
import appConfig from '../utils/appConfig'

// 设置请求API的根路径
wxRequest.baseUrl = `${appConfig.HTTP_BAST_URL}/api/public/v1/`

// 首页轮播图API
const getHomeSwiper = params => {
  return wxRequest('home/swiperdata', params).then(res => res.data)
}
// 首页导航栏
const getHomeNav = params => {
  return wxRequest('home/catitems', params).then(res => res.data)
}
// 首页楼层
const getHomeFloor = params => {
  return wxRequest('home/floordata', params).then(res => res.data)
}
// 商品详情
const getGoodsDetail = params => {
  return wxRequest('goods/detail', params).then(res => res.data)
}
// 微信登录换取token
const postUsersWxLogin = params => {
  return wxRequest('users/wxlogin', params).then(res => res.data)
}
// 微信支付创建订单
const postMyOrdersCreate = params => {
  return wxRequest('my/orders/create', params).then(res => res.data)
}
// 订单支付
const postMyOrdersPay = params => {
  return wxRequest('my/orders/req_unifiedorder', params).then(res => res.data)
}
// 订单支付状态查询
const postMyOrdersChkOrder = params => {
  return wxRequest('my/orders/chkOrder', params).then(res => res.data)
}
// 订单查询
const postMyOrdersAll = params => {
  return wxRequest('my/orders/all', params).then(res => res.data)
}

// 将封装的API统一导出
export default {
  getHomeSwiper,
  getHomeNav,
  getHomeFloor,
  getGoodsDetail,
  postUsersWxLogin,
  postMyOrdersCreate,
  postMyOrdersPay,
  postMyOrdersChkOrder,
  postMyOrdersAll
}
