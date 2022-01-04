<template>
    <view class="tabbar-placeholder" :style="{ height: tabbarboxHeight + safeBottom + 'px' }">
        <view class="flex flex-row tabbar-box justify-content-around" :style="{ height: tabbarboxHeight + safeBottom + 'px' }">
            <view class="item flex align-items-center justify-content-center flex1" v-for="(item, index) in list" :key="index" @tap.stop="() => navigateTo(item.path, index)">
				<image class="img" :src="current === index ? item.icon_h : item.icon"></image>
				<view class="label f22 c-33" :class="{ active: current === index }" v-if="item.text">{{ item.text }}</view>
            </view>
        </view>
    </view>
</template>

<script>
import { navs } from '@/common/js/nav.js';
export default {
    name: 'tabBar',
    props: {
        current: {
            type: Number,
            default: 0
        }
    },
    data () {
        return {
			tabbarboxHeight: uni.upx2px(100),
            list: [
                {
                    text: '首页',
                    icon: '/static/images/home.png', //未选中图标
                    icon_h: '/static/images/home-h.png', //选中图片
                    path: '/pages/index/index' //页面路由
                },
                {
                    text: '关注',
                    icon: '/static/images/attention.png',
                    icon_h: '/static/images/attention-h.png',
                    path: '/pages/attention/index'
                },
                {
                    text: '消息',
                    icon: '/static/images/message.png',
                    icon_h: '/static/images/message-h.png',
                    path: '/pages/message/index'
                },
                {
                    text: '我',
                    icon: '/static/images/me.png',
                    icon_h: '/static/images/me-h.png',
                    path: '/pages/user/index'
                }
            ]
        };
    },
    computed: {
        messageNewNum() {
            return this.$store.state.messageNewNum;
        },
		safeBottom () {
			return this.$store.state.systemInfo.safeBottom
		}
    },
    methods: {
		navigateTo (path, index) {
            const currentPage = getCurrentPages()[0];
			// , currentRoute: currentPage.route
            this.$emit('tapitem', { path, index });
            // console.log(currentPage.route, navs[pathName]);
            if (currentPage.route === path) return; // 一样的路径不跳转
			this.$nav.switchTab(path)
            // if ( uni.getStorageSync('token') || pathName === 'index' ) { // 已经登录，首页不用登录页可以看
            //     this.$nav.switchTab(pathName);
            // } else {
            //     this.$nav.navigateTo('login');
            // }
        }
    }
};
</script>

<style lang="scss" scoped>
.tabbar-placeholder {
    background: transparent;
    width: 100%;
    // height: 100rpx;
    margin: 0 auto;
    // &.tabbar-box-x {
    //     height: 158rpx;
    // }
}
.tabbar-box {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
	height: 100%;
    // height: 100rpx;
    background-color: #ffffff;
    z-index: 1000;
    // &.tabbar-x {
    //     height: 158rpx;
    //     padding-bottom: 58rpx;
    //     // bottom: 58rpx;
    // }
    .item {
        height: 100rpx;
        .img {
            width: 46rpx;
            height: 46rpx;
            margin-bottom: 8rpx;
        }
    }
	.active {
	    color: #333333;
	    font-weight: 700;
	    text-align: center;
	}
}
</style>
