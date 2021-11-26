let opOption = (option) => {
	let params = '?';
	for (let key in option) {
		params += key + '=' + encodeURIComponent(option[key]) + '&';
	}
	return params.slice(0, params.length - 1);
};
let clickLock = false;
export default {
	navigateTo (path, option){
		if (clickLock) return;
			clickLock = true;
			// uniapp的navigateTo的complete有bug不触发
			setTimeout(() => {
				clickLock = false;
			}, 50);
		uni.navigateTo({
			url: path + (!!option ? opOption(option) : ''),
			animationType: 'pop-in',
			animationDuration: 40,
				complete () {
					clickLock = false;
				}
		});
	},
	redirectTo (path, option){
    if (clickLock) return;
    clickLock = true;
		uni.redirectTo({
			url: path + (!!option ? opOption(option) : ''),
        complete () {
        clickLock = false;
      }
		});
	},
	navigateBack (){
    if (clickLock) return;
    clickLock = true;
    // app动画持续300毫秒后
		setTimeout(() => {
			clickLock = false;
		}, 310);
		uni.navigateBack();
	},
	switchTab (path, option){
    if (clickLock) return;
    clickLock = true;
		uni.switchTab({
			url: path + (!!option ? opOption(option) : ''),
			complete () {
				clickLock = false;
			}
		});
	}
};
