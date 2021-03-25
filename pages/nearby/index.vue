<template>
	<view class="container">
		<TabbarNavigationBar title="北海圈" />
		附近的人
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
					selected: 1,
					show: true
				})
			}
		}
	}
</script>

<style>
</style>
