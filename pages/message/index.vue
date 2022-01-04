<template>
	<view class="">
		<view>
			消息
		</view>
		<cptTabbar :current="2"></cptTabbar>
	</view>
</template>

<script>
import cptTabbar from '@/components/cptTabbar.vue'
export default {
	data () {
		return {}
	},
	components: {
		cptTabbar
	}
}
</script>

<style lang="scss" scoped>
</style>
