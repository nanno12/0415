import api from './api' // 导入 api

/* 将所有接口统一起来便于维护 */

export const login = data => {
  return api({
    url: '/clf/paf/findPafLists',
    method: 'post',
    data
  })
}

export const registration = data => {
  return api({
    url: '/clf/paf/findPafLists',
    method: 'post',
    data
  })
}

// 默认全部导入
export default {
  login,
  registration
}