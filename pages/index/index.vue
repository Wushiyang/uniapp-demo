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
				tab_list: [
					{
						label: '推荐',
						value: 0
					},
					{
						label: '美食',
						value: 1
					},
					{
						label: '数码',
						value: 2
					},
					{
						label: '打卡',
						value: 3
					},
					{
						label: '酒吧',
						value: 4
					},
					{
						label: '结婚',
						value: 5
					},
					{
						label: '芜湖',
						value: 6
					}
				]
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
