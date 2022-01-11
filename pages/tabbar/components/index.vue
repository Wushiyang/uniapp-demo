<template>
  <view class="page-container">
    <u-navbar bgColor="#3c9cff" fixed placeholder>
      <template slot="left">
        <view></view>
      </template>
      <template slot="center">
        <view class="c-white f30">组件</view>
      </template>
    </u-navbar>

    <view class="list">
      <view class="item" v-for="(item, index) in list">
        <!--        <view class="flex flex-row jc-center">
          <u-image :src="item.logo" width="60rpx" height="60rpx"></u-image>
        </view> -->
        <view class="c-regular f28 mb20 lh60">
          <view class="logo" :style="{ background: item.logo.bgColor }">
            <u-image :src="item.logo.src" :width="item.logo.width" :height="item.logo.height"></u-image>
          </view>
          <view class="text" v-html="item.text"></view>
        </view>
        <view class="c-link f28" @tap.stop="() => $u.route(item.path)">去看看</view>
      </view>
    </view>
    <yyFooter :current="1" />
  </view>
</template>

<script>
  import yyFooter from '@/components/ui/yyFooter/index.vue'
  export default {
    data() {
      return {
        list: [
          {
            logo: {
              src: '/static/images/components/uview_logo.png',
              width: '60rpx',
              height: '60rpx',
              bgColor: 'transparent'
            },
            text: 'uView是uni-app生态专用的UI框架，uni-app 是一个使用 Vue.js 开发所有前端应用的框架，开发者编写一套代码， 可发布到iOS、Android、H5、以及各种小程序(微信/支付宝/百度/头条/QQ/钉钉)等多个平台(引言自uni-app网)。但目前除微信小程序，其它小程序平台的兼容可能存在一些问题，后续会针对这方面持续优化。',
            path: '/pages/components/uview/index'
          },
          {
            logo: {
              src: '/static/images/components/mescroll_logo.png',
              width: '536rpx',
              height: '66rpx',
              bgColor: '#000000'
            },
            text: 'mescroll的uni版本, 是在 uni-app 运行的下拉刷新和上拉加载的组件<br/>1. mescroll的uni版本, 是专门用在uni-app的下拉刷新和上拉加载的组件, 支持一套代码编译到iOS、Android、H5、小程序等多个平台<br/>2. mescroll的uni版本, 继承了mescroll.js的实用功能: 自动处理分页, 自动控制无数据, 空布局提示, 回到顶部按钮 ..<br/>3. mescroll的uni版本, 丰富的案例, 自由灵活的api, 超详细的注释, 可让您快速自定义真正属于自己的下拉上拉组件<br/>4. mescroll的uni版本, 提供<mescroll-body>和<mescroll-uni>两个组件, 其中<mescroll-body>支持配置成系统自带的下拉组件<br/>5. <mescroll-body>是1.2.1版本新增的组件, 用来填补<mescroll-uni>的不足',
            path: '/pages/components/mescroll/index'
          }
        ]
      }
    },
    components: {
      yyFooter
    }
  }
</script>

<style lang="scss" scoped>
  .lh60 {
    line-height: 60rpx;
  }
  .page-container {
    min-height: 100vh;
    background: white;

    .list {
      padding: 0 30rpx;
      .item {
        padding: 40rpx 0;
        border-bottom: 2rpx solid $yy-border-color;
        .logo {
          display: inline-block;
          vertical-align: bottom;
          margin-right: 10rpx;
        }
        .text {
          display: inline;
        }
      }
    }
  }
</style>
