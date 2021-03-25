// 设置 Token
export const setToken = (state, value) => {
    state.token = value;
}
// 导航总高度
export const getNavHeight = (state) => {
	return state.statusBarHeight + state.navigationBarHeight
}