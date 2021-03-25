import store from '@/store/index.js'
import Request from './luch-request/index.js'
import config from '../config.js'
import { getMocker } from '../mocker.js'

const http = new Request();
import { showLoading, hideLoading, showToast } from '../utils.js'

http.setConfig((config) => { /* 设置全局配置 */
	config.baseUrl = config.baseUrl /* 根域名不同 */
	config.header = {
		'my-api-version': 'v1',
		'my-platform': 'wap',
		'my-dev-hash':'',
	}
	config.timeout = 6000;
	return config
})

/**
 * 自定义验证器，如果返回true 则进入响应拦截器的响应成功函数(resolve)，否则进入响应拦截器的响应错误函数(reject)
 * @param { Number } statusCode - 请求响应体statusCode（只读）
 * @return { Boolean } 如果为true,则 resolve, 否则 reject
 * 有默认，非必写
 */
http.validateStatus = (statusCode) => {
	return statusCode === 200
}

http.interceptor.request((config, cancel, resolve) => { /* 请求之前拦截器 */
	config.header = {
		...config.header,
	}
	if (config.hasLoading) {
		showLoading('加载中')
	}
	if (process.env.NODE_ENV === 'development' && config.mock) {
		// mocker请求延时一秒
		setTimeout(()=>{
			config.hasLoading && hideLoading()
			return resolve(getMocker(config.url))
		}, 1000)
	} else {
		return config
	}
})

// 必须使用异步函数，注意
http.interceptor.response(async (response) => { /* 请求之后拦截器 */
	const { code, message } = response.data
	code !== 0 && !response.config.isHideError && showToast(message)
	response.config.hasLoading && hideLoading()
	return response.data
}, (response) => { // 请求错误做点什么
	showToast('请求出错!')
	return response.data;
})

function fetch (url, params = {}, extra = {}) {
	let options = {
		hasLoading: true,
		isHideError: false,
		mock: false
  }
  options = Object.assign(options, extra)
  options.params = params
  return http.get(url, options)
}

function post (url, data, extra = {}) {
	let options = {
		hasLoading: true,
		isHideError: false,
		mock: false
  }
  options = Object.assign(options, extra)
  return http.get(url, data, options)
}

export {
	fetch,
	post,
	http
}