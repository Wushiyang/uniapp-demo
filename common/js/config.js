let config = {}

if( process.env.NODE_ENV === 'development'){
	
    // 开发环境
	config.baseUrl = 'https://test.com';
	
} else {
	
    // 测试环境
	config.baseUrl = 'https://jz-api.365haofang.com';
	
	// 生产环境 
	// urlConfig = 'https://jz-api.365haofang.com/';

}

export default config