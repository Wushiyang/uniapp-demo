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
		token: ''
	},
	mutations,
	getters,
	actions
})

export default store