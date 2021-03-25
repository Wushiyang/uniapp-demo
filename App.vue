<script>
	export default {
		onLaunch: function() {
			const systemInfo = uni.getSystemInfoSync() // 此时获取的是空白屏的设备信息 
			const { top, height } = uni.getMenuButtonBoundingClientRect()
			this.$store.state.statusBarHeight = systemInfo.statusBarHeight
			this.$store.state.navigationBarHeight = height + (top - systemInfo.statusBarHeight) * 2
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
	/* 	@import './assets/scss/patch.scss'; */
	/*每个页面公共css */
	@import '@/common/scss/app.scss';
	@import '@/common/scss/common.scss';	
</style>
