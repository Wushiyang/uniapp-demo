<script>
	import { setSystemUInfo, setNetworkType } from '@/common/js/utils.js'
	export default {
		onLaunch: function () {
			setSystemUInfo()
			uni.hideTabBar()
			// #ifdef MP-WEIXIN
			uni.showShareMenu({
				withShareTicket: true,
				menus: ['shareAppMessage', 'shareTimeline']
			});
			// #endif
			//#ifdef APP-PLUS
			//消息推送别名设置
			//this.zhPush.bindAlias("test_alias")
			//console.log("消息推送：",this.zhPush.getVersion())
			//this.$store.commit("logout");
			//#endif
			setNetworkType()
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
