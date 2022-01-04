<template>
    <view class="avatar-container" :class="[dot ? 'dot' : '' ]" :style="{ height: size + 'rpx', width: size + 'rpx' }">
        <image v-if="isError" class="img" :src="'' | jumpAvatar('errorAvatar')" :mode="mode" ></image>
        <image v-else  class="img" @error="() => isError = true" :src="src | jumpAvatar(isAnonymous && 'anonymous')" :mode="mode"></image>
    </view>
</template>

<script>
    export default {
        props: {
            size: {
                type: Number,
                default: 50
            },
            src: {
                type: String,
                default: ''
            },
            mode: {
                type: String,
                default: 'aspectFill'
            },
            dot: {
                type: Boolean,
                default: false
            },
            isAnonymous: {
                type: Boolean,
                default: false
            }
        },
        data () {
            return {
                isError: false
            };
        },
        created () {},
    };
</script>

<style lang="scss" scoped>
.dot {
    position: relative;
    &:after {
        content: '';
        position: absolute;
        width: 25%;
        height: 25%;
        background: #FF5252;
        border-radius: 50%;
        left: 0;
        top: 0;
        border: 1px solid #FFFFFF;
    }
}
.avatar-container {
    flex-shrink: 0;
    .img {
       border-radius: 50%;
       width: 100%;
       height: 100%;
       background-color: #f2f2f2;
    }
}
</style>
