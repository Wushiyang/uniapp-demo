export default {
	// 图片路径转化
	jumpImgs: ( value , defaultmg) => {
		if (!!value) {
			return value
		} else {
			return '/static/images/' + defaultmg;
		}
	}
}