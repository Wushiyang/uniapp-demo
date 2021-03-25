<template>
	<view class="container">
		<TabbarNavigationBar title="北海圈" showSearch />
		<movableTabbar @tab-tap="handletabtap" :list="tab_list"></MovableTabbar>
	</view>
</template>

<script>
import MovableTabbar from '@/components/movabletabbar.vue'
import TabbarNavigationBar from '@/components/navigationBar/tabbarNavigationBar.vue'
export default {
		components:{
			MovableTabbar,
			TabbarNavigationBar
		},
		data() {
			return {
				tab_list: []
			}
		},
		onShow() {
			const page = this.$mp.page
			if (typeof page.getTabBar === 'function' && page.getTabBar()) {
				page.getTabBar().setData({
					selected: 0,
					show: true
				})
			}
			this.$api.getHomeInfo().then(res => {
				const {code, data} = res
				if (code === 0) {
					this.tab_list = data.tab_list
				}
			});
		},
		methods: {
			handletabtap (value) {
				
			}
			// getDetail() {
			// 	this.$http.get('albumInfo', { params: { mid: this.mid } } ).then(res=> {
			// 		if ( res.code == 0 ) {
			// 		} else {
			// 			uni.showToast({ title: res.message, icon: 'none' });
			// 		}
			// 	});
			// }
		}
	}
</script>

<style>

</style>
