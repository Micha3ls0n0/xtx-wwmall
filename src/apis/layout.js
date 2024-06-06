import http from "../utils/http"

//头部商品分类
export function getCategoryAPI(){
    return http.get("/home/category/head")
}