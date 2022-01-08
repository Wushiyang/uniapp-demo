import { baseUrl } from './config/index.js'

const install = (Vue, vm) => {
    // 版本管理
    // let version = {
    //     v1: 'v1',
    //     basePath: '/api/v1/app',
    //     basePath2: '/api/v1',
    //     basePath3: '/api/v1/admin'
    // }

    // let auth_login = (params = {}) => vm.$u.http.post(version.basePath + '/login', params)
    // let auth_logout = () => vm.$u.http.post(version.basePath + '/logout')
    // let auth_captcha = () => vm.$u.http.get(version.basePath2 + '/captcha')
    // let auth_forget = (params = {}) => vm.$u.http.post(version.basePath + '')
    // let send_valid_code = (params = {}) => vm.$u.http.post(version.basePath + '')

    // /**
    //  *  使用uniapp App下载
    //  * @param params {fileName: 文件名, fileId: 文件md5 }
    //  * @returns {Promise<unknown>}
    //  */
    // let app_down_file = (params = {}) => {
    //     let basePath = vm.$u.queryParams(params, true)
    //     return new Promise((resolve, reject) => {
    //         uni.downloadFile({
    //             url: baseUrl.Base_api1_URL + version.basePath2 + '/download' + basePath,
    //             header: {
    //                 Authorization: 'Bearer ' + uni.getStorageSync('token')
    //             },
    //             success: resolve,
    //             fail: reject
    //         })
    //     })
    // }

    // /***
    //  * 使用 uni h5端下载
    //  * @param params {fileName: '', fileId: '' }
    //  * @returns {Promise<unknown>}
    //  */
    // let h5_down_file = (params = {}) => {
    //     return new Promise((resolve, reject) => {
    //         let basePath = vm.$u.queryParams(params, true)
    //         uni.request({
    //             url: baseUrl.Base_api1_URL + version.basePath2 + '/download' + basePath,
    //             header: {
    //                 Authorization: 'Bearer ' + uni.getStorageSync('token')
    //             },
    //             method: 'GET',
    //             responseType: 'arraybuffer',
    //             success: resolve,
    //             fail: reject
    //         })
    //     })
    // }

    vm.$u.api = {};

}

export default {
    install
}
