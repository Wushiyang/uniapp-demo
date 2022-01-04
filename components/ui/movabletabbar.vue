<template>
	<movable-area>
		<movable-view direction="horizontal" inertia out-of-bounds :style="{width: countWidth}">
			<text v-for="(item, index) in list" :key="index" @tap="handleTapTabbarItem(item.value)">{{item.label}}</text>
		</movable-view>
	</movable-area>
</template>

<script>
export default {
	name: 'MovableTabbar',
	props: {
		list: {
			type: Array,
			default: []
		}
	},
	computed: {
		countWidth () {
			return this.list.reduce((total, current, index, arr) => {
				return total + current.label.length * 32 + 56
			}, 0) + 'rpx'
		}
	},
	methods: {
		handleTapTabbarItem (value) {
			this.$emit('tab-tap', value)
		}
	}
}
</script>

<style lang="scss">
	movable-area {
		width: 100%;
		height: 68rpx;
		display: flex;
		flex-wrap: nowrap;
		movable-view {
			display: flex;
			height: 68rpx;
			flex-direction: row;
			line-height: 68rpx;
			text {
				padding: 0 28rpx;
				flex-shrink: 0;
			}
		}
	}
</style>
