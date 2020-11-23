<template>
	<view class="container">
		<movableTabbar @tab-tap="handletabtap" :list="tab_list"></MovableTabbar>
<!-- 		<scroll-view scroll-y class="waterfall">
			<view class="waterfall_item" v-for="">
				<image src="" mode=""></image>
				<text></text>
				<view class="">
					<image src="" mode=""></image>
					<text></text>
					<uni-icons type=""></uni-icons>
					<text></text>
				</view>
			</view>
		</scroll-view> -->
	</view>
</template>

<script>
import MovableTabbar from '@/components/movabletabbar.vue'
export default {
		components:{
			MovableTabbar	
		},
		data() {
			return {
				tab_list: []
			}
		},
		onShow() {
			this.$shpAPI.getHomeInfo().then(res => {
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
