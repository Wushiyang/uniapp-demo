// 加载信息，带遮罩
let needLoadingRequestCount = 0, loadingTimer;
export function showLoading (title = '', mask = false) {
	if (needLoadingRequestCount === 0) {
		uni.showLoading({
			title,
			mask
		});
		// 最长6s自动关闭
		loadingTimer = setTimeout(() => {
			if (needLoadingRequestCount > 0) {
				uni.hideLoading();
			}
		}, 1000);
	}
	needLoadingRequestCount++;
}

// 隐藏遮罩
export function hideLoading () {
	if (needLoadingRequestCount <= 0) return;
	needLoadingRequestCount--;
	if (needLoadingRequestCount === 0) {
        loadingTimer && clearTimeout(loadingTimer);
		uni.hideLoading();
	}
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