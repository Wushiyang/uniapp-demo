<template>
	<view class="">
		<view>
			我的
		</view>
		<cptTabbar :current="3"></cptTabbar>
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
