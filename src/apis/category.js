import http from "../utils/http"

//根据id获得一级分类对象信息
export function getTopCategoryAPI(id) {
    //{params: {id}} 对象指定请求的查询参数
    ///category?id=123
    return http.get("/category", {params: {id}})
}

//根据id获得二级分类对象信息
export function getCategoryFilterAPI(id) {
    return http.get("/category/sub/filter", {params: {id}})
}

//获取二级分类商品列表 请求体方式,传入对象
export const getSubCategoryAPI = (data) => {
    return http.post("/category/goods/temporary", data)
}
// export function getSubCategoryAPI(data){
//     return http.post("/category/goods/temporary", data)
// }