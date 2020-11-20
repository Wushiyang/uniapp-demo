import { fetch, post } from './utils/index'
let shpAPI = {}
// 获取首页顶部tabbar列表
shpAPI.getHomeInfo = () => {
	var test = fetch('/api/getHomeInfo', {}, { mock: true })
	return test
} 

export default shpAPI;