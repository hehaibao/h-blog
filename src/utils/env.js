/**
 * 配置开发环境和线上环境之间的切换
 * 
 * baseUrl: 域名地址
 * imgBaseUrl: 图片所在域名地址
 * 
 */

let baseUrl = ''
let imgBaseUrl = ''

if (process.env.NODE_ENV == 'development') { // 开发环境
	baseUrl = 'http://localhost:8080/'
	imgBaseUrl = baseUrl + 'assets/images' 
}else if (process.env.NODE_ENV == 'production') { // 线上环境
	baseUrl = 'http://demo.com/';//TODO: 替换域名
	imgBaseUrl = baseUrl + 'static/img' 
}

export {
	baseUrl,
	imgBaseUrl
}