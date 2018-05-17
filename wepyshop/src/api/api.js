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

// 将封装的API统一导出
export default {
  getHomeSwiper,
  getHomeNav,
  getHomeFloor
}
