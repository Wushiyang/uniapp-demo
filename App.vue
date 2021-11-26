<script>
	export default {
		onLaunch: function () {
			const systemInfo = uni.getSystemInfoSync(); // 此时获取的是空白屏的设备信息
			systemInfo.iosBottomBlockHeight = res.screenHeight - res.safeArea.bottom; // 不使用res.safeAreaInsets.bottom，因为uniapp在小程序下计算有误
			// #ifdef APP-PLUS
			systemInfo.navigationBarHeight = uni.upx2px(88);
			// #endif
			// #ifdef MP-WEIXIN
        	let { height, top } = wx.getMenuButtonBoundingClientRect();
            // store.commit('setCachet', wx.getMenuButtonBoundingClientRect());
            systemInfo.navigationBarHeight =  top - res.statusBarHeight + height + (top - res.statusBarHeight)*2;
            systemInfo.defaultNavigationBarHeight = (top - res.statusBarHeight) * 2 + height;
			// #endif
			this.$store.commit('setSystemInfo', systemInfo);
			// const { top, height } = uni.getMenuButtonBoundingClientRect();
			// this.$store.state.statusBarHeight = systemInfo.statusBarHeight;
			// this.$store.state.navigationBarHeight = height + (top - systemInfo.statusBarHeight) * 2;
		},
		onShow: function () {
			console.log('App Show');
		},
		onHide: function () {
			console.log('App Hide');
		}
	};
</script>

<style>
	/*每个页面公共css */
	@import '@/common/scss/app.scss';
	@import '@/common/scss/common.scss';	
</style>
