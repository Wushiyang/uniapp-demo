<template>
	<!-- 自定义导航栏 -->
	<view>
		<view class="header-box">
			<!-- 状态栏 -->
			<view class="statusbar" :style="{ height: statusBarHeight + 'px'}"></view>
			<!-- 导航栏 -->
			<view v-if="showNavigationBar" :style="{ height: navigationBarHeight + 'px'}">
				<slot>
					<!-- #ifdef APP-PLUS | H5 -->
					<view class="content">
						<view class="leftmenu" v-if="showBackBtn || showHomeBtn" :class="{ corner: showBackBtn && showHomeBtn }">
							<view class="image-box" v-if="showBackBtn" @tap.stop="() => handleBack()">
								<image class="image" src="@/static/images/tabbar/back.png"></image>
							</view>
							<view class="line" v-if="showBackBtn && showHomeBtn"></view>
							<view class="image-box" v-if="showHomeBtn" @tap.stop="() => handleHome()">
								<image class="image" src="@/static/images/tabbar/back-home.png"></image>
							</view>
						</view>
						<view class="f36 c-14">{{ title }}</view>
					</view>
					<!-- #endif -->
					<!-- #ifdef MP-WEIXIN -->
					<view class="content" :style="{ height: menuButtonBoundingRect.height + 'px', 'line-height': menuButtonBoundingRect.height + 'px', 'margin-top': (menuButtonBoundingRect.top - statusBarHeight) * 1 + 'px', 'margin-bottom': (menuButtonBoundingRect.top - statusBarHeight) * 2 + 'px' }" >
						<!-- 左边按钮 -->
						<view class="leftmenu" :class="{ corner: showBackBtn && showHomeBtn }" v-if="showBackBtn || showHomeBtn" :style="{ height: menuButtonBoundingRect.height + 'px', 'line-height': menuButtonBoundingRect.height + 'px', 'left': (screenWidth - menuButtonBoundingRect.right ) + 'px'}">
							<view v-if="showBackBtn" class="image-box" @tap.stop="() => handleBack()" :style="{ width: menuButtonBoundingRect.width / 2 - 2 + 'px', height: menuButtonBoundingRect.height - 1 + 'px', 'line-height': menuButtonBoundingRect.height - 1 + 'px' } ">
								<image class="image" :style=" { width: menuButtonBoundingRect.height - 14 + 'px', height: menuButtonBoundingRect.height - 14 + 'px'} " src="/static/images/tabbar/back.png" ></image>
							</view>
							<view v-if="showBackBtn && showHomeBtn" class="line"></view>

							<view v-if="showHomeBtn" class="image-box" @tap.stop="() => handleHome()" :style=" { width: menuButtonBoundingRect.width / 2 - 2 + 'px', height: menuButtonBoundingRect.height - 1 + 'px', 'line-height': menuButtonBoundingRect.height - 1 + 'px' } ">
								<image class="image" :style=" { width: menuButtonBoundingRect.height - 14 + 'px', height: menuButtonBoundingRect.height - 14 + 'px'} " src="/static/images/tabbar/back-home.png" ></image>
							</view>
						</view>
						<!-- 标题 -->
						<view class="f36 c-14" :style="{ height: menuButtonBoundingRect.height + 'px', 'line-height': menuButtonBoundingRect.height + 'px'}">{{ title }}</view>
					</view>
					<!-- #endif -->
				</slot>
			</view>
		</view>
		<view class="placeholder" :style="{ height: statusBarHeight + (showNavigationBar ? navigationBarHeight : 0) + 'px'}"></view>
	</view>
</template>

<script>
	export default {
		props: {
			showNavigationBar: {
				type: Boolean,
				default: true
			},
			showBackBtn: {
				type: Boolean,
				default: true
			},
			showHomeBtn: {
				type: Boolean,
				default: true
			},
			isCustomBack: {
				type: Boolean,
				default: false
			},
			title: {
				type: String,
				default: '标题'
			}
		},
		data () {
			return {
				screenWidth: uni.upx2px(750)
			};
		},
		computed: {
			statusBarHeight () {
				return this.$store.state.systemInfo.statusBarHeight
			},
			navigationBarHeight () {
				return this.$store.state.systemInfo.navigationBarHeight
			},
			menuButtonBoundingRect () {
				return this.$store.state.systemInfo.weixinMenuButtonBoundingClientRect
			}
		},
		methods: {
			handleBack () {
				if ( this.isCustomBack ) {  //自定义返回事件
					this.$emit('customBack');
				} else {
					uni.navigateBack({ delta: 1 });
				}
			},
			handleHome () {
				this.$nav.switchTab('/pages/index/index');
			},
		}
	}
</script>

<style lang="scss" scoped>
.header-box {
	width: 100%;
	position: fixed;
	top: 0;
	left: 0;
	z-index: 1000;
	background: #FFFFFF;
	.content {
	    padding: 0 30rpx;
	    display: flex;
		height: 100%;
		/* #ifdef APP-PLUS | H5 */
		flex-direction: row;
		align-items: center;
		/* #endif */
	    .leftmenu {
			margin-left: -30rpx;
	        margin-right: 20rpx;
			display: flex;
			flex-direction: row;
			align-items: center;
			/* #ifdef APP-PLUS | H5 */
			// width: 166rpx;
			height: 64rpx;
			/* #endif */
	        .image-box {
				// text-align: center;
				display: flex;
				flex-direction: row;
				justify-content: center;
				align-items: center;
				/* #ifdef APP-PLUS | H5 */
				width: 82rpx;
				height: 64rpx;
				/* #endif */
	            .image {
					/* #ifdef APP-PLUS | H5 */
					width: 36rpx;
					height: 36rpx;
					/* #endif */
	            }
	        }
	        .line {
	            float: left;
	            width: 2rpx;
	            background: #EEEEEE;
	            height: 34rpx;
	        }
	    }
		.corner {
			margin-left: 0;
			border: 2rpx solid #EEEEEE;
			border-radius: 40rpx;
		}
	}
}
.placeholder {
	width: 100%;
}
</style>
