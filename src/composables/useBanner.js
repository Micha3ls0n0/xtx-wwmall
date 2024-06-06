// 轮播图业务
import {getBannerAPI} from "../apis/home.js";
import {onMounted} from "vue";

export function useBanner(){
    const bannerList = ref([])
    const getBanner = async ()=>{
        const res = await getBannerAPI("2")
        bannerList.value = res.result
        console.log(bannerList.value)
    }
    onMounted(()=>getBanner())

    return bannerList
}