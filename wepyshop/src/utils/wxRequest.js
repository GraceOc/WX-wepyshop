// 通过import把wepy导入到当前脚本
import wepy from 'wepy'

// 封装发送请求的函数wxRequest
const wxRequest = (url, params = {}) => {
  return wepy.request({
    url: wxRequest.baseUrl + url,
    data: params.data || {},
    method: params.method || 'GET',
    dataType: params.dataType || 'json',
    header: params.header || { 'Content-type': 'application/json' }
  })
}
// 设置根路径
wxRequest.baseUrl = ''
// 导出
export default wxRequest
