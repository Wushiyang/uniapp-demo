# uni-app-router



1. 基于uni-app开发，使用uni-simple-router做路由桥接；
2. 重新封装后的好处是不用写双份路由，自动识别生成路由；
3. 支持“路由守卫”。





### 启动项目

``` bash
# 安装依赖

1、安装淘宝镜像
npm i -g cnpm --registry=https://registry.npm.taobao.org

2、安装 uni-simple-router
cnpm i uni-simple-router

3、安装其他依赖
cnpm i


# 启动项目

把项目引入hubuild，运行即可
```





### 打包项目



> 打包需要注意：因为uni-app打包需要HBuilderX，部署到服务器的话没有，所以只能把dist提交上去部署，注意区分测试环境和生产环境的接口来回切换问题。小程序/APP不受影响。



```bash
hubuild -> 发行 -> ...自行选择打包类型
```







### 项目包含



1. 全局方法/过滤器
2. 可配置的webpack（vue.config.js）
3. Axios，现成Get/Post请求封装
4. Router 自动生成全局路由，全局路由过滤/路由守卫
5. Vuex
6. 微信分享
7. Preview 图片预览插件 
8. 适配任何机型的1px边框

