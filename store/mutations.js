
// 设置 Hash
export const setHash = (state, value) => {
    state.dev_hash = value;
}

// 设置 端口类型
export const setPort = (state, value) => {
    state.port = value;
}

// 登录
export const login = (state, modal) => {
    state.token = modal.token;
	state.userInfo = modal.userInfo
}
// 退出
export const logout = (state, modal) => {
    state.token = '';
	state.userInfo = {}
}