<template>
    <div class="container">
        <!--面包屑-->
        <div class="bread-container">
            <el-breadcrumb separator=">">
                <el-breadcrumb-item :to="{path: `/`}">首页</el-breadcrumb-item>
                <el-breadcrumb-item :to="{path: `/category/${filterData.parentId}`}">
                    {{ filterData.parentName }}
                </el-breadcrumb-item>
                <!--当前页-->
                <el-breadcrumb-item>{{ filterData.name }}</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="sub-container">
            <!--v-model 指令，绑定 reqData.sortField 属性,切换标签页时，reqData.sortField 的值会更新为新激活的标签页的 name 属性值-->
            <!--@tab-change="tabChange"：监听 tab-change 事件。当标签页改变时，tabChange 方法将被触发。-->
            <el-tabs v-model="reqData.sortField" @tab-change="tabChange">
                <el-tab-pane label="最新商品" name="publishTime"></el-tab-pane>
                <el-tab-pane label="最高人气" name="orderNum"></el-tab-pane>
                <el-tab-pane label="评论最多" name="evaluateNum"></el-tab-pane>
            </el-tabs>
            <!--:infinite-scroll-disabled里是布尔值-->
            <div class="body" v-infinite-scroll="load" :infinite-scroll-disabled="disabled">
                <!--商品列表-->
                <GoodsItem v-for="good in goodList" :good="good" :key="good.id"></GoodsItem>
            </div>
        </div>
    </div>
</template>

<script setup>
    import {getCategoryFilterAPI} from "../../apis/category.js";
    import {getSubCategoryAPI} from "../../apis/category.js";
    import {useRoute, onBeforeRouteUpdate} from "vue-router";
    import GoodsItem from "../home/components/goodsItem.vue";
    // 面包屑
    const filterData = ref({})
    const route = useRoute()
    //二级分类
    const goodList = ref([])
    //定义body请求体 对象
    const reqData = ref({
        //请求正常，实际传回商品列表、排序是一样的
        categoryID: route.params.id,
        page: 1,
        pageSize: 20,
        sortField: "publishTime"
    })

    //面包屑
    const getFilterData = async (id) => {
        const res = await getCategoryFilterAPI(id)
        filterData.value = res.result
        // console.log(filterData.value)
    }

    //二级商品分类列表
    const getGoodList = async () => {
        const res = await getSubCategoryAPI(reqData.value)
        goodList.value = res.result.items
        console.log("get")
    }

    //tab切换回调
    const tabChange = ()=>{
        console.log("tab切换了", reqData.value.sortField)
        reqData.value.page = 1
        getGoodList()
    }

    //加载更多
    const disabled = ref(false)
    const load = async ()=>{
        //下一页数据
        reqData.value.page++
        const res = await getSubCategoryAPI(reqData.value)
        //合并新旧页数据
        goodList.value =[...goodList.value, ...res.result.items]
        //判断数组是否为空，为空则加载完毕，停止加载
        if (res.result.items.length === 0){
            disabled.value = true
        }
    }


    onMounted(() => getFilterData(route.params.id))
    onMounted(()=> getGoodList())
</script>

<style lang="scss" scoped>
    .bread-container {
        padding: 25px 0;
        color: #666
    }

    .sub-container {
        padding: 20px 10px;
        background-color: #fff;

        .body {
            display: flex;
            flex-wrap: wrap;
            padding: 0 10px;
        }
    }
</style>