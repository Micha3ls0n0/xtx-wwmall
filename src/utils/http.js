//axios配置文件
import axios from "axios";
//axios实例化
const http = axios.create({
    baseURL: "http://pcapi-xiaotuxian-front-devtest.itheima.net",
    timeout: 5000
});

//请求拦截器 一般会进行token身份验证等
//箭头函数不加中括号则内容就是return
http.interceptors.request.use(config => {
    return config
}, e => Promise.reject(e))

// 响应拦截器 一般进行错误的统一提示，token失效的处理等，res.data预处理了数据
http.interceptors.response.use(res=>res.data,e =>Promise.reject(e))
// http.interceptors.response.use(res => res.data, e => {
//     return Promise.reject(e)
// })

export default http;