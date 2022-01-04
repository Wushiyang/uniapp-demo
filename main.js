// "@dcloudio/uni-ui": "^1.2.8",
import Vue from "vue";
import App from "./App";
import store from "./store";
// import { RouterMount } from "uni-simple-router";
import nav from '@/common/js/nav';
import { API, filters, showToast, hideToast, showModal, hideModal } from "@/common/js/index.js";
import { mixins } from '@/common/js/mixins/mixin.js';
Vue.mixin(mixins);
// if (process.env.NODE_ENV === 'development') {
// 	require('@/common/js/mocker');
// }

// 过滤器集合
Object.keys(filters).forEach((key) => {
  Vue.filter(key, filters[key]);
});

Vue.config.productionTip = false;
Vue.prototype.$showToast = showToast;
Vue.prototype.$hideToast = hideToast;
Vue.prototype.$showModal = showModal;
Vue.prototype.$hideModal = hideModal;
Vue.prototype.$api = API;
Vue.prototype.$store = store;
Vue.prototype.$nav = nav;

App.mpType = "app";

const app = new Vue({
  store,
  ...App,
});

//v1.3.5起 H5端 你应该去除原有的app.$mount();使用路由自带的渲染方式
// #ifdef H5
// RouterMount(app, "#app");
app.$mount();
// #endif

// #ifndef H5
app.$mount(); //为了兼容小程序及app端必须这样写才有效果
// #endif

export default app;
