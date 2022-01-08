<template>
  <view class="">
    <view>
      我的
    </view>
    <yyFooter :current="2" />
  </view>
</template>

<script>
  import yyFooter from '@/components/ui/yyFooter/index.vue'
  export default {
    data() {
      return {}
    },
    components: {
      yyFooter
    }
  }
</script>

<style lang="scss" scoped>
</style>
