import http from "../utils/http.js";

export const getOrderAPI = (id)=>{
    //path
    return http.get(`/member/order/${id}`)
}