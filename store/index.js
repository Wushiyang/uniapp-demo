import Vue from 'vue'
import Vuex from 'vuex'
import * as mutations from './mutations'
import * as actions from './actions'
import * as getters from './getters'


Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		dev_hash: '',
		port: '',
		userInfo: {
			
		},
		token: '',
		statusBarHeight: 0, // 状态栏高度px，无刘海一般24，中间刘海屏一般44
		navigationBarHeight: 0, // 导航栏高度px upx2px(90)
	},
	mutations,
	getters,
	actions
})

export default store