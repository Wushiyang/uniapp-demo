import { fetch, post } from './utils/index'
let shpAPI = {}
// 获取首页顶部tabbar列表
shpAPI.getHomeInfo = () => fetch('/api/getHomeInfo', {}, { mock: true })
export default shpAPI;