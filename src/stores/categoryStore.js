// import {ref, onMounted} from "vue";
// import {defineStore} from "pinia";
//自动导入文件会缺少标记
import {getCategoryAPI} from "../apis/layout";

export const useCategoryStore = defineStore("category", ()=>{
    const categoryList = ref([])
    const getCategory = async ()=>{
        const res = await getCategoryAPI()
        categoryList.value = res.result //result是api返回的分类相关信息
        console.log(res.result)
    }
    //onMounted 钩子在组件挂载后执行操作
    onMounted(()=>getCategory());

    //返回 categoryList 和 getCategory，使它们可以在组件中使用。
    return {
        categoryList,
        getCategory
    }
})