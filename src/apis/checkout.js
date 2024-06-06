import http from "../utils/http.js";

export function getCheckInfoAPI() {
    return http.get("/member/order/pre")
}

//创建订单
export function createOrderAPI(data) {
    return http.post("/member/order", data)
}