//axios配置文件
import axios from "axios";
import {ElMessage} from "element-plus";
import {useUserStore} from "../stores/userStore.js";
import {useRouter} from "vue-router";
//axios实例化
const http = axios.create({
    baseURL: "http://pcapi-xiaotuxian-front-devtest.itheima.net",
    timeout: 10000
});

//请求拦截器 一般会进行token身份验证等
//箭头函数不加中括号则内容就是return
http.interceptors.request.use(config => {
    const useUStore = useUserStore()
    const token = useUStore.userInfo.token
    if (token){
        //在请求中统一附上token，在后端需要时提供
        config.headers.Authorization = `Bearer ${token}`
    }
    return config
}, e => Promise.reject(e))

// 响应拦截器 一般进行错误的统一提示，token失效的处理等，res.data预处理了数据
http.interceptors.response.use(res=>res.data,e =>{
    //统一错误提示
    ElMessage({
        type:"error",
        message: e.response.data.message
    })
    //401token失效处理
    const useUStore = useUserStore()
    const router = useRouter()
    if (e.response.status === 401){
        //如果返回错误，清除用户信息 跳转登录页
        useUStore.clearUserInfo()
        router.push("/login")
    }
    return  Promise.reject(e)
})
// http.interceptors.response.use(res => res.data, e => {
//     return Promise.reject(e)
// })

export default http;