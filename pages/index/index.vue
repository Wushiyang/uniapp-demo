<template>
	<view class="">
		<cptHeader title="首页" :showBackBtn="false" :showHomeBtn="false"/>
		<view>
			首页
		</view>
		<view class="" @tap="() => $nav.navigateTo('/pages/example/index')">
			跳到例子
		</view>
		<cptTabbar :current="0"></cptTabbar>
	</view>
</template>

<script>
import cptHeader from '@/components/cptHeader.vue'
import cptTabbar from '@/components/cptTabbar.vue'
export default {
	data () {
		return {}
	},
	components: {
		cptHeader,
		cptTabbar
	}
}
</script>

<style lang="scss" scoped>
</style>
