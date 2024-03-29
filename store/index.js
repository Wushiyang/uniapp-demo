import Vue from 'vue'
import Vuex from 'vuex'
import { createPersistedState } from 'vuex-persistedstate'
import * as mutations from './mutations'
import * as actions from './actions'
import * as getters from './getters'

Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		appName: 'uniapp模板',
		token: '',
		userInfo: null,
		platform: getPlatform(),
		appVersion: getCurrentAppVersion(),
		systemInfo: {
		    statusBarHeight: 0,
		    navigationBarHeight: 0,
		    windowWidth: 0,
		    windowHeight: 0,
		    screenHeight: 0,
		    safeBottom: 0,
			menuButtonBoundingRect: {
				top: 0,
				right: 0,
				height: 0,
				width: 0
			}
		},
		defaultImage: {
			avatar: 'https://static-answer.beihaizhidao.com/static/default-avatar.png', // 头像占位图
		    errorAvatar: 'https://static-answer.beihaizhidao.com/static/error-avatar.png', // 错误头像
		    topic: '/static/images/default-topic-avatar.png', // 话题图片
		    seatimg_01: '/static/images/seat_750.jpg', // 占位图1
		    seatimg_02: '/static/images/seat_345.jpg', // 占位图1
		    anonymous: '/static/images/anonymous-avatar.png' // 匿名用户头像
		},
		isRefreshPage: false, //用于判断是否刷新当前页面，配合onshow使用
		isNetworkConnected: true, //网络状态，是否能上网
		networkType: '', //当前使用的网络类型：none,4g,wifi
		pageData: null , // 页面间数据，用于页面传输大数据
	},
	mutations,
	getters,
	actions,
	plugins: [
		// createPersistedState()
	]
})


function getCurrentAppVersion (){
    let _version = '';
    // #ifdef APP-PLUS
        _version =  plus.runtime.version;
    // #endif
    return _version;
}

function getPlatform () {
    // 客户端平台   1、安卓   2、苹果  3、小程序，4、微信（小程序），5、wap（h5）
    let _platform = 0;
    // #ifdef APP-PLUS
	if (uni.getSystemInfoSync().platform === 'android'){
		_platform = 1;
	} else if(uni.getSystemInfoSync().platform === 'ios'){
		_platform = 2;
	}
    // #endif
    // #ifdef MP
    _platform = 3;
    // #endif
    // #ifdef MP-WEIXIN
    _platform = 4;
    // #endif
    // #ifdef H5
    _platform = 5;
    // #endif
    return _platform;
}

export default store