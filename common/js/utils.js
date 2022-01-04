import store from '@/store/index';
// 加载信息，带遮罩
// let loadingCount = 6, loadingTimer;
export function showLoading (title = '', mask = false) {
	uni.showLoading({
		title,
		mask
	});
}

// 隐藏遮罩
export function hideLoading () {
	uni.hideLoading()
}

// 消息框
export function showToast (title = '', mask = false) {
	uni.showToast({
		title,
		icon: 'none',
		duration: 2000,
		mask
	})
}
export function showSuccessToast (title = '', mask = false) {
	uni.showToast({
		title,
		icon: 'success',
		duration: 2000,
		mask
	})
}
export function hideToast () {
	uni.hideToast()
}

// 模态框
export function showModal () {
	
}
export function hideModal () {
	
}

export function setSystemUInfo () {
	uni.getSystemInfo({
		success: (res) => {
			res.safeBottom = res.screenHeight - res.safeArea.bottom; // 不使用res.safeAreaInsets.bottom，因为uniapp在小程序下计算有误
			// #ifdef APP-PLUS | H5
			res.navigationBarHeight = uni.upx2px(88);
			// #endif
			// #ifdef MP-WEIXIN
			const menuButtonBoundingRect = wx.getMenuButtonBoundingClientRect();
			const { height, top } = menuButtonBoundingRect
			const menuButtonPaddingTop = top - res.statusBarHeight
			res.weixinMenuButtonBoundingClientRect = menuButtonBoundingRect
			res.navigationBarHeight =  menuButtonPaddingTop * 3 + height;
			res.defaultNavigationBarHeight = menuButtonPaddingTop * 2 + height;
			// #endif
			store.commit('setSystemInfo', res);
		}
		
	})
}

export function setNetworkType() {
	uni.getNetworkType({
	    success: (res) => {
	        res.isConnected = res.networkType != 'none';
			store.commit("setNetworkInfo", res);
	    }
	});
	uni.onNetworkStatusChange( (res) =>{
		store.commit("setNetworkInfo", res);
	});
}