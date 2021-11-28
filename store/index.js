import Vue from 'vue'
import Vuex from 'vuex'
import 
import * as mutations from './mutations'
import * as actions from './actions'
import * as getters from './getters'
import { getCurrentAppVersion, getPlatform } from '@/common/js/utils.js'


Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		appName: 'uniapp模板',
		token: '',
		userInfo: null,
		platform: getPlatform(),
		appVersion: getCurrentAppVersion(),
		systemInfo: {
		    statusBarHeight: null,
		    navigationBarHeight: null,
		    windowWidth: null,
		    windowHeight: null,
		    screenHeight: null,
		    iosBottomBlockHeight: null
		},
		defaultImage: {
		    avatar: 'https://static-answer.beihaizhidao.com/static/default-avatar.png', // 头像占位图
		    errorAvatar: 'https://static-answer.beihaizhidao.com/static/error-avatar.png', // 错误头像
		    topic: '/static/images/default-topic-avatar.png', // 话题图片
		    seatimg_01: '/static/images/seat_750.jpg', // 占位图1
		    seatimg_02: '/static/images/seat_345.jpg', // 占位图1
		    anonymous: '/static/images/anonymous-avatar.png' // 匿名用户头像
		},
		isRefreshPage: false,//用于判断是否刷新当前页面，配合onshow使用
		isNetworkConnected: true,//网络状态，是否能上网
		networkType: '',//当前使用的网络类型：none,4g,wifi
		pageData: null ,// 页面间数据，用于页面传输大数据
	},
	mutations,
	getters,
	actions,
	plugins: [
		createPersistedState()
	]
})

export default store