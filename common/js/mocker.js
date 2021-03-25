// import Mocker from 'mock'
function getMocker (url) {
	const mockerServer = {
		['/api/getHomeInfo'] () {
			return { 
				code: 0, 
				msg: 'ok',
				data: {
					tab_list: [
						{
							label: '推荐',
							value: 0
						},
						{
							label: '美食',
							value: 1
						},
						{
							label: '数码',
							value: 2
						},
						{
							label: '打卡',
							value: 3
						},
						{
							label: '酒吧',
							value: 4
						},
						{
							label: '结婚',
							value: 5
						},
						{
							label: '芜湖',
							value: 6
						}
					]
				}
			}
		}
	}
	return mockerServer[url] ? mockerServer[url]() : {code: -1, message: '不存在改mocker api', data: null}
}

export { getMocker }