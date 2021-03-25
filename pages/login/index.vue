<template>
	<view class="container align-item-center bg-white">
		<image src="https://th.bing.com/th/id/R99d89a10fd49cc4837c1f7e3b7bcf5ac?rik=89meMhI6FbwEVQ&riu=http%3a%2f%2fp3.qhmsg.com%2fdr%2f220__%2ft01e627233eb2ace51e.jpg&ehk=DykrG4x4X1wb85NGLOeIm8wP1xN6IG5t6jEMcZiIAcg%3d&risl=&pid=ImgRaw" mode="" class="mt200" style="width: 188rpx;height: 188rpx;"></image>
		<template v-if="step === 1">
			<button type="default" class="mt120 login_btn" open-type="getPhoneNumber" @getphonenumber="handlePhoneNumber">微信用户一键登录</button>
			<text class="mt60 c-3799ff f28">随便看看</text>
		</template>
		<template v-if="step === 2">
			<text class="mt120 f28">请完成微信授权以继续使用</text>
			<button type="default" class="login_btn" open-type="getUserInfo" @getuserinfo="handleUserInfo">授权微信用户信息</button>
		</template>
		<text class="f28" style="position: absolute;bottom: 34rpx;">进入即表示同意《隐私政策》及《服务协议》</text>
	</view>
</template>

<script>
	export default {
		data () {
			return {
				step: 1
			}
		},
		onShow () {
		},		
		methods: {
			handlePhoneNumber ({ detail: data, detail: { errMsg } }) {
				if (errMsg === 'getPhoneNumber:fail user deny') {
					uni.showModal({
						title: '提示',
						content: '您已拒绝授权，请重新点击授权！',
						showCancel: false
					})
				} else {
					// 允许
					console.log(data)
					this.step = 2
				}
			},
			handleUserInfo ({ detail: data, detail: { errMsg } }) {
				if (errMsg === 'getUserInfo:fail auth deny') {
					// this.step = 1
					uni.showModal({
						title: '提示',
						content: '您已拒绝授权，请重新点击授权！',
						showCancel: false
					})
				} else {
					// 跳回登录前页面
					console.log(data)
				}
			}
		}
	}
</script>

<style>
	.login_btn {
		height: 84rpx;
		width: 540rpx;
		background-color: #4CD964!important;
		color: #FFFFFF!important;
		font-size: 28rpx;
		text-align: center;
		border-radius: 42rpx;
		border: 0;
		line-height: 84rpx;
	}
</style>
