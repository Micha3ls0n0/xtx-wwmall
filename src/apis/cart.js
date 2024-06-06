import http from "../utils/http.js";

//获取购物车列表
export function findNewCartListAPI() {
    return http.get("/member/cart")
}

// 根据sku对象进行新增购物车
export function insertCartAPI(sku) {
    return http.post("/member/cart", sku)
}

export const delCartAPI = (ids) => {
    console.log("delCartAPI,ids", ids)
    return http.delete("/member/cart", {data: {ids}})
}

//登录合并购物车
export function mergeCartAPI(data) {
    return http.post("/member/cart/merge", data)
}
//修改购物车信息
export function updateCartItem(skuId, data){
    return http.put(`/member/cart/${skuId}`, data)
}
