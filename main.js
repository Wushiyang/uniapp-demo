import Vue from "vue";
import App from "./App";
import store from "./store";
import { RouterMount } from "uni-simple-router";
import { http, showToast, hideToast, showModal, hideModal } from "@/assets/js/utils/index.js"; // 全局挂载引入，配置相关在该index.js文件里修改
import filters from '@/assets/js/filters.js'
import shpAPI from '@/assets/js/api'
if (process.env.NODE_ENV === 'development') {
	require('@/assets/js/mocker')
}

// 过滤器集合
Object.keys(filters).forEach((key) => {
  Vue.filter(key, filters[key]);
});

Vue.config.productionTip = false;
Vue.prototype.$http = http;
Vue.prototype.$showToast = showToast;
Vue.prototype.$hideToast = hideToast;
Vue.prototype.$showModal = showModal;
Vue.prototype.$hideModal = hideModal;
Vue.prototype.$shpAPI = shpAPI;
Vue.prototype.$store = store;

App.mpType = "app";

const app = new Vue({
  store,
  ...App,
});

//v1.3.5起 H5端 你应该去除原有的app.$mount();使用路由自带的渲染方式
// #ifdef H5
RouterMount(app, "#app");
// #endif

// #ifndef H5
app.$mount(); //为了兼容小程序及app端必须这样写才有效果
// #endif

export default app;
