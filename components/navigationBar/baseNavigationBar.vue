<template>
	<!-- 自定义导航栏 -->
	<view class="base_navigation_bar">
		<!-- 状态栏 -->
		<view :class="['status_section', statusbarClass]" :style="{height: statusBarHeight + 'px'}"></view>
		<!-- 导航栏 -->
		<view :style="navigationBarStyle" :class="['navigation_section', 'flex', 'flex-direction-row', 'align-item-center', 'justify-content-between', navbarClass]">
			<view>
				<slot name="left"></slot>
			</view>
			<view class="flex1">
				<slot name="center"></slot>
			</view>
			<view>
				<slot name="right"></slot>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			statusbarClass: {
				type: String,
				default: ''
			},
			navbarClass: {
				type: String,
				default: ''
			},
		},
		data() {
			return {
				statusBarHeight: ''
			};
		},
		computed: {
			navigationBarStyle () {
				return `height: ${this.$store.state.navigationBarHeight}px;`
			}
		},
		created () {
			this.statusBarHeight = this.$store.state.statusBarHeight
		}
	}
</script>

<style>
.navigation_bar {

}
.status_bar {
/* 	height: var(--status-bar-height) rpx; nvue不支持 */
}
.navigation_section {
	padding-right: 200rpx;
}
</style>
