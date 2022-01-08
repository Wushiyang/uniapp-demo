import Vue from 'vue'
import App from './App'
import uView from "uview-ui";
import store from './store'

Vue.use(uView);

// 注册全局组件
// import MescrollBody from "@/components/mescroll-uni/mescroll-body.vue"
// import MescrollUni from "@/components/mescroll-uni/mescroll-uni.vue"

// Vue.component('mescroll-body', MescrollBody)
// Vue.component('mescroll-uni', MescrollUni)

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    store,
    ...App
})

// http拦截器，将此部分放在new Vue()和app.$mount()之间，才能App.vue中正常使用
// import httpInterceptor from '@/common/http.interceptor.js'

// Vue.use(httpInterceptor, app)

// // http接口API集中管理引入部分
// import httpApi from '@/common/http.api.js'

// Vue.use(httpApi, app)

app.$mount()
