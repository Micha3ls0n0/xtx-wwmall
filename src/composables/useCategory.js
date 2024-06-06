// 商品细分类业务
// 把独立的业务逻辑封装到各个函数内部
// 函数内部把组件中需要用到的数据或者方法return出去

import {onBeforeRouteUpdate, useRoute} from "vue-router";
import {getTopCategoryAPI} from "../apis/category.js";

export function useCategory(){
    const categoryData = ref({})
    const route = useRoute()
    const getCategory = async (id)=>{
        const res = await getTopCategoryAPI(id)
        categoryData.value = res.result
        console.log(categoryData.value)
    }
    onMounted(()=>getCategory(route.params.id))
    onBeforeRouteUpdate((to)=>getCategory(to.params.id))

    return categoryData
}

