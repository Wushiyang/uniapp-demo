// import {
//   Base_api1_URL
// } from './config/index.js'
// import {
//   goToLogin
// } from './utils/index.js'

const install = (Vue, vm) => {
  // Vue.prototype.$u.http.setConfig((conf) => {
  //   return {
  //     baseUrl: Base_api1_URL,
  //     originalData: true,
  //   }
  // })

  // 请求拦截部分，如配置，每次请求前都会执行
  // Vue.prototype.$u.http.interceptors.request.handlers.push(config => {
  //   let token = uni.getStorageSync('token')
  //   if (token) {
  //     config.header['Authorization'] = 'Bearer ' + token
  //   }
  //   // #ifdef APP-PLUS
  //   config.header.Serialization = uni.getStorageSync('Serialization')
  //   // #endif
  //   let data = config.data || {}
  //   if (config.method.toLowerCase() == 'get') {
  //     let queryPath = vm.$u.queryParams(data, config.url.indexOf('?') == -1 ? true : false)
  //     config.url += queryPath
  //     delete config.data
  //   }
  //   return config
  // })

  // // 响应拦截，如配置，每次请求结束都会执行本方法
  // Vue.prototype.$u.http.interceptors.response.handlers.push(res => {
  //   if (res.statusCode == 401) {
  //     // goToLogin()
  //     // return false
  //   }
  //   if (res.statusCode == 200) {
  //     // 网盘接口没有code返回
  //     if ([null, undefined, ''].includes(res.data.code)) {
  //       return res.data
  //     }
  //     switch (Number(res.data.code)) {
  //       // case 401:
  //       //     goToLogin()
  //       //     return false
  //       case 0:
  //       case 200:
  //       case 100010:
  //         return res.data
  //       default:
  //         console.log(res)
  //         let msg = (res.data && res.data.message) || res.message
  //         vm.$u.toast(msg, 2000)
  //         // throw new Error(msg)
  //         return false
  //     }
  //   } else {
  //     console.log('response = ', res)
  //     vm.$u.toast('服务器内部错误')
  //     return false
  //   }
  // })

}

export default {
  install
}
