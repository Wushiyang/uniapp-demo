<template>
	<view class="navigation_bar">
		<!-- 导航栏 -->
		<BaseNavigationBar class="base_navigation_bar" navbarClass="bg-white">
			<template v-slot:left>
				<text class="f35 tac">{{title}}</text>
			</template>
			<template v-slot:center>
				<input type="text" v-model="searchText" class="bg-red" />
			</template>
		</BaseNavigationBar>
		<!-- 占位 -->
		<view :style="{height: placeholderHeight + 'px'}"></view>
	</view>
</template>

<script>
	import BaseNavigationBar from './baseNavigationBar.vue'
	export default {
		props: {
			title: {
				type: String,
				default: ''
			},
			showSearch: {
				type: Boolean,
				default: false
			}
		},
		data () {
			return {
				placeholderHeight: '',
				searchText: ''
			}
		},
		created () {
			this.placeholderHeight = this.$store.getters.getNavHeight
		},
		components: {
			BaseNavigationBar
		},
		methods: {
		}
	}
</script>

<style>
.base_navigation_bar {
	position: fixed;
	z-index: 1;
	left: 0;
	top: 0;
	width: 750rpx;
	border-bottom: 1px solid #eee;
}
</style>
