// 加载信息，带遮罩
// let loadingCount = 6, loadingTimer;
export function showLoading (title = '', mask = false) {
	uni.showLoading({
		title,
		mask
	});
}

// 隐藏遮罩
export function hideLoading () {
	uni.hideLoading()
}

// 消息框
export function showToast (title = '', mask = false) {
	uni.showToast({
		title,
		icon: 'none',
		duration: 2000,
		mask
	})
}
export function showSuccessToast (title = '', mask = false) {
	uni.showToast({
		title,
		icon: 'success',
		duration: 2000,
		mask
	})
}
export function hideToast () {
	uni.hideToast()
}

// 模态框
export function showModal () {
	
}
export function hideModal () {
	
}