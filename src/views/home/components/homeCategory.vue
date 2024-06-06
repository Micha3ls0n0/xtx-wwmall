<template>
    <div class="home-category">
        <ul class="menu">
            <li v-for="item in categoryStore.categoryList" :key="item.id">
                <router-link to="/">{{ item.name }}</router-link>
                <!--遍历对应item对象中的children数组中索引为 0 和 1 的元素。-->
                <router-link to="/" v-for="i in item.children.slice(0,2)" :key="i.id">
                    {{ i.name }}
                </router-link>
                <div class="layer">
                    <h4>分类推荐<small>根据您的购买记录或浏览记录推荐</small></h4>
                    <ul>
                        <li v-for="i in item.goods" :key="i.id">
                            <router-link to="/">
                                <!--:src vue 动态绑定 src 属性-->
                                <img alt="" :src="i.picture"/>
                                <div class="info">
                                    <p class="name ellipsis-2">
                                        {{ i.name }}
                                    </p>
                                    <p class="desc ellipsis">{{ i.desc }}</p>
                                    <p class="price"><i>¥</i>{{ i.price }}</p>
                                </div>
                            </router-link>
                        </li>
                    </ul>
                </div>
            </li>
        </ul>
    </div>
</template>

<script setup>
    import {useCategoryStore} from "../../../stores/categoryStore.js";
    const categoryStore = useCategoryStore()
</script>

<style lang="scss" scoped>
    .home-category {
        width: 250px;
        height: 500px;
        background: rgba(0, 0, 0, 0.8);
        position: relative;
        z-index: 99;

        .menu {
            li {
                padding-left: 40px;
                height: 55px;
                line-height: 55px;

                //.menu:hover
                &:hover {
                    background: $xtxColor;
                }

                //<router-link> 会渲染为一个 <a> 标签，因此这些样式会应用到 router-link 上
                a {
                    margin-right: 4px;
                    color: #fff;

                    &:first-child {
                        font-size: 16px;
                    }
                }

                .layer {
                    width: 990px;
                    height: 500px;
                    background: rgba(255, 255, 255, 0.8);
                    position: absolute; //父abs，子基于父定位
                    left: 250px;
                    top: 0;
                    display: none;
                    padding: 0 15px;

                    h4 {
                        font-size: 20px;
                        font-weight: normal;
                        line-height: 80px;

                        small {
                            font-size: 16px;
                            color: #666;
                            padding-left: 20px;
                        }
                    }


                    ul {
                        display: flex;
                        flex-wrap: wrap;

                        li {
                            width: 310px;
                            height: 120px;
                            margin-right: 15px;
                            margin-bottom: 15px;
                            border: 1px solid #eee;
                            border-radius: 4px;
                            background: #fff;

                            &:nth-child(3n) {
                                margin-right: 0;
                            }

                            a {
                                display: flex;
                                width: 100%;
                                height: 100%;
                                align-items: center;
                                padding: 10px;

                                &:hover {
                                    background: #e3f9f4;
                                }

                                img {
                                    width: 95px;
                                    height: 95px;
                                }

                                .info {
                                    padding-left: 10px;
                                    line-height: 24px;
                                    overflow: hidden;

                                    .name {
                                        font-size: 16px;
                                        color: #666;
                                    }

                                    .desc {
                                        color: #999;
                                    }

                                    .price {
                                        font-size: 22px;
                                        color: $priceColor;

                                        i {
                                            font-size: 16px;
                                        }
                                    }
                                }
                            }
                        }
                    }
                }

                &:hover {
                    .layer {
                        display: block;//鼠标悬停显示彩蛋
                    }
                }
            }
        }
    }
</style>