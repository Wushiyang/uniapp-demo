export default {
	// 图片路径转化
	staticImgs: ( value , defaultmg) => {
		if (!!value) {
			return value
		} else {
			return '/static/images/' + defaultmg;
		}
	}
}