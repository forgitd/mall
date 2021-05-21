import axios from "axios";

export function request(config) {
	const instance = axios.create({
		baseURL: 'http://123.207.32.32:8000',
		timeout: 5000
	})

	//拦截器
	//请求拦截
	instance.interceptors.request.use(config => {
		// console.log(config);
		//1.更改config的配置 eg:headers

		//2.每次请求的时候，在界面显示一个请求的图标

		//3.某些网络请求需要登录token，必须携带一些特殊的信息
		return config
	},err => {
		// console.log(err);
	})


	//响应拦截
	instance.interceptors.response.use(res => {
		// console.log(res);
		return res.data
	},err => {
		//console.log(err)
	})
	return instance(config)
}
