<template>
    <div class="home-product">
        <HomePanel v-for="category in goodsList" :title="category.name" :key="category.id">
            <div class="box">
                <router-link class="cover" to="/">
                    <img v-img-lazy="category.picture" alt=""/>
                    <strong class="label">
                        <span>{{ category.name }}馆</span>
                        <span>{{ category.saleInfo }}</span>
                    </strong>
                </router-link>
                <ul class="goods-list">
                    <li v-for="good in category.goods" :key="good.id">
                        <!--goodsItem.vue-->
                        <GoodsItem :good="good"></GoodsItem>
                    </li>
                </ul>
            </div>
        </HomePanel>
    </div>
</template>

<script setup>
    import HomePanel from "./homePanel.vue";
    import {getGoodsAPI} from "../../../apis/home.js";
    import GoodsItem from "./goodsItem.vue";

    const goodsList = ref([]);
    const getGoods = async () => {
        //解构赋值从 getGoodsAPI() 函数返回的对象中提取 result 属性。
        // 这种方式直接获取到了对象中的 result 属性，并将其存储在同名的局部变量 result 中。
        const {result} = await getGoodsAPI()
        // const result1 = await getGoodsAPI()
        console.log(result)
        // console.log(result1)
        goodsList.value = result
    }

    onMounted(() => {
        getGoods()
    })
</script>

<style lang="scss" scoped>
    .home-product {
        background: #fff;
        margin-top: 20px;
        .sub {
            margin-bottom: 2px;

            a {
                padding: 2px 12px;
                font-size: 16px;
                border-radius: 4px;

                &:hover {
                    background: $xtxColor;
                    color: #fff;
                }

                &:last-child {
                    margin-right: 80px;
                }
            }
        }

        .box {
            display: flex;

            .cover {
                width: 240px;
                height: 610px;
                margin-right: 10px;
                position: relative;

                img {
                    width: 100%;
                    height: 100%;
                }

                .label {
                    width: 188px;
                    height: 66px;
                    display: flex;
                    font-size: 18px;
                    color: #fff;
                    line-height: 66px;
                    font-weight: normal;
                    position: absolute;
                    left: 0;
                    top: 50%;
                    transform: translate3d(0, -50%, 0);

                    span {
                        text-align: center;

                        &:first-child {
                            width: 76px;
                            background: rgba(0, 0, 0, 0.9);
                        }

                        &:last-child {
                            flex: 1;
                            background: rgba(0, 0, 0, 0.7);
                        }
                    }
                }
            }

            .goods-list {
                width: 990px;
                display: flex;
                flex-wrap: wrap;

                li {
                    width: 240px;
                    height: 300px;
                    margin-right: 10px;
                    margin-bottom: 10px;

                    &:nth-last-child(-n + 4) {
                        margin-bottom: 0;
                    }

                    &:nth-child(4n) {
                        margin-right: 0;
                    }
                }
            }
        }
    }
</style>