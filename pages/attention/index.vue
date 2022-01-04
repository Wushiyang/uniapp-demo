<template>
	<view class="">
		<view>
			关注
		</view>
		<cptTabbar :current="1"></cptTabbar>
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
