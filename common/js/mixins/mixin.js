import store from '@/store/index.js';
export const mixins = {
	data () {
		return {
			nav: this.$store.state.nav,
			systemInfo: this.$store.state.systemInfo,
		};
	},
	created () {
		uni.hideTabBar({ animation: false });
	},
	// #ifdef MP-WEIXIN
	// onShareAppMessage (res) {
	//     return {
	// 		title: '北海知道，这里有你所有想知道的',
 //            path: '/pages/index/index'
	//     };
	// },
	// #endif
	methods: {
		// jumpLogin (parameter) {
		// 	let name = !!parameter ? parameter : '';
		// 	const pages = getCurrentPages();
		// 	if ( !!pages[pages.length - 1] ) {
		// 		uni.setStorageSync( 'loginSaveUrl', '/' + pages[pages.length - 1].route + name );
		// 		uni.redirectTo({
		// 			url: '/pages/login/login' ,
		// 			animationType: 'pop-in',
		// 			animationDuration: 200
		// 		});
		// 	}
		// },
        // backFn () {
        //     uni.navigateBack({ delta: 1 });
        // }
	}
};
