<template>
  <view class="page-container">
    
    <view class="userInfo">
      <view class="flex flex-row ai-center">
        <view class="mr20">
          <u-avatar text="YY" font-size="48rpx" size="120rpx"></u-avatar>
        </view>
        <text class="f48 c-white">yangyang</text>
      </view>
    </view>

    <u-cell-group class="b-white">
    	<u-cell>
        <template slot="icon">
          <view class="yyfont yyfont-gerenziliao f44 c-5ac725"></view>
        </template>
        <template slot="title">
          <view class="flex flex-row ai-center ml12" style="height: 100rpx">个人资料</view>
        </template>
      </u-cell>
    	<u-cell>
        <template slot="icon">
          <view class="yyfont yyfont-shezhi f44 c-3c9cff"></view>
        </template>
        <template slot="title">
          <view class="flex flex-row ai-center ml12" style="height: 100rpx">设置</view>
        </template>
      </u-cell>
    </u-cell-group>

    <yyFooter :current="2" />
  </view>
</template>

<script>
  import yyFooter from '@/components/ui/yyFooter/index.vue'
  export default {
    data() {
      return {
      }
    },
    components: {
      yyFooter
    },
    methods: {
    }
  }
</script>

<style lang="scss" scoped>
  ::v-deep .u-cell__body {
    padding: 0 30rpx !important;
  }
  .page-container {
    position: fixed;
    left: 0;
    top: 0;
    width: 100vw;
    min-height: 100vh;
    .userInfo {
      height: 420rpx;
      padding: 180rpx 40rpx 0;
      background: $yy-primary;
    }
  }
</style>
