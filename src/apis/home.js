import http from "../utils/http"

//轮播图 distributionSite='1' 首页 '2'表示分类页面
export function getBannerAPI(distributionSite='1'){
    return http.get('/home/banner', {params:{distributionSite}});
}

//新品
export function getNewAPI(){
    return http.get('/home/new');
}

export function getHotAPI(){
    return http.get('/home/hot');
}

//获取产品列表
export function getGoodsAPI(){
    return http.get('/home/goods');
}