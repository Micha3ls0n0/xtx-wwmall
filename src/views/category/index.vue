<template>
    <div class="top-category">
        <div class="container m-top-20">
            <div class="bread-container">
                <!--面包屑导航-->
                <!--separator: 自定义分隔符，可以是文本或图标。-->
                <el-breadcrumb separator=">">
                    <!--el-breadcrumb-item定义每一个路径节点-->
                    <!--to:定义路由跳转对象-->
                    <el-breadcrumb-item :to="{path:`/`}">首页</el-breadcrumb-item>
                    <el-breadcrumb-item>{{ categoryData.name }}</el-breadcrumb-item>
                </el-breadcrumb>
            </div>
            <div class="home-banner">
                <el-carousel height="500px">
                    <el-carousel-item v-for="item in bannerList" :key="item.id">
                        <img :src="item.imgUrl" alt="">
                    </el-carousel-item>
                </el-carousel>
            </div>
            <!--分类栏-->
            <div class="sub-list">
                <h3>全部分类</h3>
                <ul>
                    <li v-for="item in categoryData.children" :key="item.id">
                        <!--去二级分类页-->
                        <router-link :to="`/category/sub/${item.id}`">
                            <img :src="item.picture" alt="">
                            <p>{{ item.name }}</p>
                        </router-link>
                    </li>
                </ul>
            </div>
            <!--小类商品-->
            <div class="ref-goods" v-for="item in categoryData.children" :key="item.id">
                <div class="head">
                    <h3>- {{ item.name }} -</h3>
                </div>
                <div class="body">
                    <GoodsItem v-for="good in item.goods" :good="good" :key="good.id"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
//二级
// import {getTopCategoryAPI} from "../../apis/category.js";
// import {getBannerAPI} from "../../apis/home.js";
// import {onBeforeRouteUpdate, useRoute} from "vue-router";//获取当前路由
// import {onMounted, ref, onUpdated} from "vue";
import GoodsItem from "../home/components/goodsItem.vue";
import {useBanner} from "../../composables/useBanner";
import {useCategory} from "../../composables/useCategory";

const categoryData = useCategory();
const bannerList = useBanner();



// mbx
// const categoryData = ref({})
// const route = useRoute()
// const path = route.path
// const params = route.params
// console.log(path, params) // /category/1005002 {id: '1005002'}
//lbt
// const bannerList = ref([])

// const getBanner = async ()=>{
//     const res = await getBannerAPI("2")
//
//     bannerList.value = res.result
//     console.log(bannerList.value)
// }

//面包屑导航

// const getCategory = async ()=>{
//     const res = await getTopCategoryAPI(route.params.id)
//     categoryData.value = res.result
//     // console.log(res)
//     console.log(categoryData.value)
// }
//优化：
// const getCategory = async (id)=>{
//     const res = await getTopCategoryAPI(id)
//     categoryData.value = res.result
//     console.log(categoryData.value)
// }

//轮播图

// onMounted(()=>getCategory(route.params.id))//第一次进入获取
// onMounted(()=>getBanner())
// // onUpdated(()=>getCategory())//点击其他页面获取 有bug
// //to 即将进入的目标路由对象
// onBeforeRouteUpdate((to)=>getCategory(to.params.id))
</script>

<style lang="scss" scoped>
.top-category{
    .bread-container {
        padding: 25px 0;
    }
}

.home-banner{
    width: 1240px;
    height: 500px;
    margin: 0 auto;

    img{
        width: 100%;
        height: 500px;
    }
}

.sub-list{
    margin-top: 20px;
    background-color: #fff;


    ul{
        display: flex;
        padding: 0 32px;
        flex-wrap: wrap;//子元素上到下换行
        justify-content: center;

        li{
            width: 168px;
            height: 160px;

            a{
                font-size: 16px;
                text-align: center;//内容居中
                display: block;//占满容器

                img{
                    width: 100px;
                    height: 100px;
                }

                p{
                    line-height: 40px;
                }

                &:hover{
                    color: $xtxColor;
                }
            }
        }
    }
}

.ref-goods {
    background-color: #fff;
    margin-top: 20px;
    position: relative;

    .head {
        .xtx-more {
            position: absolute;
            top: 20px;
            right: 20px;
        }

        .tag {
            text-align: center;
            color: #999;
            font-size: 20px;
            position: relative;
            top: -20px;
        }
    }

    .body {
        display: flex;
        justify-content: space-around;
        padding: 0 40px 30px;
    }
}
</style>