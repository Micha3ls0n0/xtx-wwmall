import http from "../utils/http";

export function getCategoryAPI(){
    //axios 请求返回的是一个 Promise 对象
    return http.get("home/category/head")
}