export default {
  method: 'post',
  // 基础url前缀
  // baseURL: 'http://dmp.xf/api/v1', // http://dmp.kunming.cn/api/v1
  // baseURL: process.env.BASE_API,// webpack配置的基础url
  baseURL: {
  // 测试接口
  dev: 'http://172.17.1.211:20032',
  // 生产接口
  production: 'http://dmp.kunming.cn/api/v1'
  },
  // 请求头信息
  headers: {
  'Content-Type': 'application/json;charset=UTF-8'
  },
  // 参数
  data: {},
  // 设置超时时间
  timeout: 10000,
  // 携带凭证
  withCredentials: false,
  // 返回数据类型
  responseType: 'json'
  }