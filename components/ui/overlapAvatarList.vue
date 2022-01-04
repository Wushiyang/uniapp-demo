<template>
    <view class="container">
        <avatar class="item"  :style="{ marginLeft: -size * 0.26 + 'rpx', zIndex: direction === 'right' ? list.length - index : 'auto' }" v-for="(item, index) in list" :key="index" :size="size" :src="getPropertyByPath(item, srcKey)" />
    </view>
</template>

<script>
import avatar from './avatar.vue';
export default {
    props: {
        list: {
            type: Array,
            default: () => []
        },
        srcKey: {
            type: String,
            default: 'src'
        },
        direction: {
            type: String,
            default: 'left' // left从左到右右边最新 right 从右到左左边最新
        },
        size: {
            type: Number,
            default: 50
        }
    },
    components: {
        avatar
    },
    methods: {
        getPropertyByPath (target, path) {
            const arr = path.split('.');
            let value = target;
            arr.forEach((p) => {
                value = value[p];
            });
            return value;
        }
    }
};
</script>

<style lang="scss" scoped>
.container {
    display: flex;
    flex-direction: row;
    align-items: center;
    .item {
        box-sizing: border-box;
        border: 4rpx solid white;
        border-radius: 50%;
    }
}
</style>
