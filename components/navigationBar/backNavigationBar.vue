<template>
	<!-- 左边返回 中间文字 右边发送 -->
	<view>
		<!-- 导航栏 -->
		<BaseNavigationBar class="navigation_bar" :class="[navbarClass, showBorder ? 'border-bottom' : '']">
			<template v-slot:left>
				<view class="h90 flex-direction-row align-item-center" style="width: 200rpx" @click="handleBack">
					<text class="iconfont f35 ml25 mr30">&#xe609;</text>
				</view>
			</template>
			<template v-slot:center>
				<view class="flex1">
					<slot name="center"></slot>
				</view>				
			</template>			
			<template v-slot:right>
				<view style="width: 200rpx">
					<slot name="right"></slot>
				</view>
			</template>
		</BaseNavigationBar>
		<!-- 占位 -->
		<view :style="{height: placeholderHeight + 'px'}"></view>
	</view>
</template>

<script>
	import BaseNavigationBar from './baseNavigationBar.nvue'
	export default {
		props: {
			title: {
				type: String,
				default: ''
			},
			navbarClass: {
				type: String,
				default: ''
			},
			showLeft: {
				type: Boolean,
				default: true
			},
			showBorder: {
				type: Boolean,
				default: true
			}
		},
		data () {
			return {
				placeholderHeight: '',
				clickLock: false
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
.navigation_bar {
	position: fixed;
	z-index: 1;
	left: 0;
	top: 0;
	width: 750rpx;
	/* #ifndef APP-PLUS-NVUE */
	box-sizing: border-box;
	/* #endif */
}
.border-bottom {
	border-bottom-width: 1px;
	border-bottom-style: solid;
	border-bottom-color: #e8e8e8;
}
</style>
