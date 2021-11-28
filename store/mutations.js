
// 登录
export const login = (state, value) => {
    state.token = value.token;
	state.userInfo = value.userInfo
}
// 退出
export const logout = (state) => {
    state.token = '';
	state.userInfo = null
}
// 设置设备信息
export const setSystemInfo = (state, value) => {
    state.systemInfo = value;
};
// 网络状态
export const setNetworkInfo = (state,data) =>{
	state.isNetworkConnected = data.isConnected;
	state.networkType = data.networkType;
};