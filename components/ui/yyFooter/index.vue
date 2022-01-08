<template>
  <view class="footer-data">
    <u-tabbar :value="current" @change="changePage">
      <u-tabbar-item v-for="(item, index) in list" :text="item.text" :name="index" :key="index"
        :icon="handleIcon(item, index)">
      </u-tabbar-item>
    </u-tabbar>
  </view>
</template>

<script>
  export default {
    created() {
      uni.hideTabBar();
    },
    props: {
      current: {
        type: Number,
        default: 0
      }
    },
    mounted() {},
    data() {
      return {
        list: [{
            pagePath: '/pages/tabbar/home/index',
            iconPath: '/static/images/tabbar/home.png',
            selectedIconPath: '/static/images/tabbar/home_h.png',
            text: '首页'
          },
          {
            pagePath: '/pages/tabbar/form/index',
            iconPath: '/static/images/tabbar/form.png',
            selectedIconPath: '/static/images/tabbar/form_h.png',
            text: '表单'
          },
          {
            pagePath: '/pages/tabbar/my/index',
            iconPath: '/static/images/tabbar/my.png',
            selectedIconPath: '/static/images/tabbar/my_h.png',
            text: '我'
          }
        ]
      }
    },
    methods: {
      changePage(index) {
        this.$u.route({
          type: 'switchTab',
          url: this.list[index].pagePath
        })
      },
      handleIcon(item, index) {
        if (index === this.current) {
          return item.selectedIconPath;
        }
        return item.iconPath;
      }
    }
  }
</script>

<style scoped lang="scss">

</style>
