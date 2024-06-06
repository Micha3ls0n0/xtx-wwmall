<template>
    <div class="goods-hot">
        <h3>{{ title }}</h3>
        <router-link :to="`/detail/${item.id}`" class="goods-item" v-for="item in hotList" :key="item.id">
            <img :src="item.picture" alt="">
            <p class="name ellipsis">{{ item.name }}</p>
            <p class="desc ellipsis">{{ item.desc }}</p>
            <p class="price">¥{{ item.price }}</p>
        </router-link>
    </div>
</template>

<script setup>
import {getHotGoodsAPI} from "../../../apis/detail.js";
import {useRoute} from "vue-router";

const hotList = ref([])
const route = useRoute()
//父传子，决定热榜类型
const props = defineProps({
    hotType:{
        type:Number
    }
})

const TYPEMAP = {
    1:"24小时热榜",
    2:"周热榜"
}

const title = computed(()=>{
    //键获取值 赋值给title
    return TYPEMAP[props.hotType]
})

const getHotList = async ({id, type})=>{
    const res = await getHotGoodsAPI({id, type})
    hotList.value = res.result
}

onMounted(()=>getHotList({id: route.params.id,type: 1}))
</script>

<style lang="scss" scoped>
.goods-hot{
    h3{
        height: 70px;
        background: $helpColor;
        color: #fff;
        font-size: 18px;
        line-height: 70px;
        //padding-left: 25px;
        margin-bottom: 10px;
        font-weight: normal;
        text-align: center;
    }
    .goods-item {
        display: block;
        padding: 20px 30px;
        text-align: center;
        background: #fff;

        img {
            width: 160px;
            height: 160px;
        }

        p {
            padding-top: 10px;
        }

        .name {
            font-size: 16px;
        }

        .desc {
            color: #999;
            height: 29px;
        }

        .price {
            color: $priceColor;
            font-size: 20px;
        }
    }
}
</style>