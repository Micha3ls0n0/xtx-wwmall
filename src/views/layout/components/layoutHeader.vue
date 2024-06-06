<template>
    <header class="app-header">
        <div class="container">
            <h1 class="logo">
                <router-link to="/">旺旺商城</router-link>
            </h1>
            <ul class="app-header-nav">
                <li class="home">
                    <router-link to="/">首页</router-link>
                </li>
                <!--:key 是一个特殊属性，用于在渲染列表或动态组件时为每个元素提供唯一标识-->
                <!--此时item为数组，item.id作唯一标识-->
                <li v-for="item in categoryStore.categoryList" :key="item.id">
                    <!--动态绑定数据到属性 v-bind:to-->
                    <router-link active-class="active" :to="`/category/${item.id}`">{{ item.name }}</router-link>
                </li>

            </ul>
            <div class="search">
                <i class="iconfont icon-search"></i>
                <input type="text" placeholder="搜一搜">
            </div>
            <!-- 头部购物车 -->
            <HeaderCart></HeaderCart>
        </div>
    </header>
</template>

<script setup>
    //头部分类标签组件
    import {useCategoryStore} from "../../../stores/categoryStore"
    const categoryStore = useCategoryStore()
    import HeaderCart from "./headerCart.vue";
</script>

<style lang="scss" scoped>
    .app-header {
        background-color: #fff;

        .container {
            display: flex;
            align-items: center;
        }

        .logo {
            width: 200px;

            a {
                display: block;
                height: 123px;
                width: 100%;
                text-indent: -9999px;
                background: url("../../../assets/images/logo.png") no-repeat center 18px / contain;
            }
        }

        .app-header-nav {
            width: 820px;
            display: flex;
            padding-left: 40px;
            position: relative;
            z-index: 998;

            li {
                margin-left: 40px;
                width: 38px;
                text-align: center;

                a {
                    font-size: 16px;
                    line-height: 32px;
                    height: 32px;
                    display: inline-block;

                    &:hover {
                        color: $xtxColor;
                        border-bottom: 1px solid $xtxColor;
                    }
                }

                .active {
                    color: $xtxColor;
                    border-bottom: 1px solid $xtxColor;
                }
            }
        }

        .search {
            width: 170px;
            height: 32px;
            position: relative;
            border-bottom: 1px solid #e7e7e7;
            line-height: 32px;

            .icon-search {
                font-size: 18px;
                margin-left: 5px;
            }

            input {
                width: 140px;
                padding-left: 5px;
                color: #666;
            }
        }

        .cart {
            width: 50px;

            .curr {
                height: 32px;
                line-height: 32px;
                text-align: center;
                position: relative;
                display: block;

                .icon-cart {
                    font-size: 22px;
                }

                em {
                    font-style: normal;
                    position: absolute;
                    right: 0;
                    top: 0;
                    padding: 1px 6px;
                    line-height: 1;
                    background: $helpColor;
                    color: #fff;
                    font-size: 12px;
                    border-radius: 10px;
                    font-family: Arial;
                }
            }
        }
    }
</style>