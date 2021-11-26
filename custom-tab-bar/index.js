Component({
  data: {
		show: false,
    selected: 0,
    color: "#7A7E83",
    selectedColor: "#3cc51f",
    list: [{
		    pagePath: '/pages/square/index',
				iconPath: '/static/images/icon-home.png',
				selectedIconPath: '/static/images/icon-home.png',				
		    text: '广场'
		}, {
		    pagePath: '/pages/nearby/index',
				iconPath: '/static/images/icon-task.png',
				selectedIconPath: '/static/images/icon-task.png',								
		    text: '附近'
		}, {
			iconPath: '/static/images/icon-task.png',
			text: '发布'
		}, {
		    pagePath: '/pages/info/index',
				iconPath: '/static/images/icon-mine.png',
				selectedIconPath: '/static/images/icon-mine.png',								
		    text: '消息'
		}, {
		    pagePath: '/pages/mine/index',
				iconPath: '/static/images/icon-mine.png',
				selectedIconPath: '/static/images/icon-mine.png',								
		    text: '我的'
		}]
  },
  attached() {
  },
  methods: {
    switchTab(e) {
      const data = e.currentTarget.dataset
      const url = data.path
			const that = this
			console.log(data)
      this.$shp.switchTab({
				url
			})
    }
  }
})