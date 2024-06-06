import http from "../utils/http.js";

//获取订单列表 参数为对象
export const getUserOrder = (params) => {
    return http.get('/member/order', {params: params})
}