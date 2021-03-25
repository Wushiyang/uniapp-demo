<template>
	<view class="container">
		<TabbarNavigationBar title="北海圈" />
		消息
	</view>
</template>

<script>
	import TabbarNavigationBar from '@/components/navigationBar/tabbarNavigationBar.vue'
	export default {
		components:{
			TabbarNavigationBar
		},
		onShow () {
			const page = this.$mp.page
			if (typeof page.getTabBar === 'function' && page.getTabBar()) {
				page.getTabBar().setData({
					selected: 3,
					show: true
				})
			}
		}
	}
</script>

<style>
</style>
