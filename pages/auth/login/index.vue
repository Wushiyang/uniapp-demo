<template>
  <view class="page-container">
    <view class="bg"></view>
    <view class="wel mb40">welcome</view>

    <view class="mb40">
      <view class="btn-box" v-if="loginType === 1">
        <view class="wxbtn mb20" @tap.stop="wechatLogin">
            <text class="yyfont yyfont-wechat f32 mr12"></text>
            <text>微信登录</text>
        </view>
        <view class="applebtn mb20" @tap.stop="appleLogin">
            <text class="yyfont yyfont-pingguo f32 mr12"></text>
            <text>通过Apple登录</text>
        </view>
      </view>

      <view class="form-box" v-else-if="loginType === 2">
        <u-input></u-input>
        <u-input></u-input>
      </view>
    </view>

    <view class="flex flex-row ai-center jc-between" style="padding: 0 40rpx;">
      <text class="f28 c-regular" @tap.stop="() => loginTypeShow = true">登录方式</text>
      <text class="f28 c-regular">忘记密码</text>
    </view>

    <!-- 登录方式操作 -->
    <u-action-sheet :actions="actionList" title="登录方式" :show="loginTypeShow"></u-action-sheet>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        loginType: 1,
        loginTypeShow: false,
        actionList: [
          {
            name: '授权登录'
          },
          {
            name: '账号登录'
          },
          {
            name: '手机登录'
          }
        ]
      }
    },
    methods: {
      wechatLogin () {

      },
      appleLogin () {

      }
    }
  }
</script>

<style lang="scss" scoped>
.page-container {
  .bg {
    background: $yy-primary;
    height: 600rpx;
    width: 750rpx;
    margin-bottom: 20rpx;
  }
  .wel {
    text-align: center;
    color: #333333;
    font-size: 80rpx;
    font-weight: 700;
  }
  .btn-box {
    display: flex;
    flex-direction: column;
    align-items: center;
    .wxbtn {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      width: 510rpx;
      height: 100rpx;
      background-color: rgba(255, 255, 255, 0.58);
      border-radius: 24rpx;
      color: #141414;
      font-size: 32rpx;
      border: 1rpx solid $yy-border-color;
    }
    .applebtn {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      width: 510rpx;
      height: 100rpx;
      background-color: rgba(255, 255, 255, 0.58);
      border-radius: 24rpx;
      color: #141414;
      font-size: 32rpx;
      border: 1rpx solid $yy-border-color;
    }
  }
}
</style>
