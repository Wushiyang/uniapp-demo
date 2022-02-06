<template>
  <view class="page-container">
    <u-navbar bgColor="#3c9cff" leftIconColor="#FFFFFF" autoBack fixed placeholder>
      <template slot="center">
        <view class="c-white f30">mescroll组件</view>
      </template>
    </u-navbar>

    <mescroll-body ref="mescrollRef" @init="mescrollInit" @down="downCallback" @up="upCallback" :down="downOption"
      :up="upOption">
      <view v-for="data in dataList"> 数据列表... </view>
    </mescroll-body>
  </view>
</template>

<script>
  import MescrollMixin from "@/uni_modules/mescroll-uni/mescroll-mixins.js";
  export default {
    mixins: [MescrollMixin], // 使用mixin
    data() {
      return {

      }
    },
    methods: {}
  }
</script>

<style lang="scss" scoped>
  .page-container {}
</style>
