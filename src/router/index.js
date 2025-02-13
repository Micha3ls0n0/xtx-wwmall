import {createRouter, createWebHistory} from "vue-router";
import Layout from "../views/layout/index.vue"
import Login from "../views/login/index.vue"
import Home from "../views/home/index.vue"
import Category from "../views/category/index.vue"
import SubCategory from "../views/subCategory/index.vue"
import Detail from "../views/detail/index.vue"
import CartList from "../views/cart/index.vue"
import Checkout from "../views/checkout/index.vue"
import Pay from "../views/pay/index.vue"
import PayBack from "../views/pay/payBack.vue";
import Member from "../views/member/index.vue"
import UserInfo from "../views/member/components/userInfo.vue";
import UserOrder from "../views/member/components/userOrder.vue";

const routes = [
    {
        path: "/",
        component: Layout,
        // ()=>import("../views/layout/index.vue")
        children: [
            {
                //子路由不设置path代表在父路由同一页面
                path: "",
                component: Home
            },
            {
                path: "category/:id",
                component: Category
            },
            {
                path: "category/sub/:id",
                component: SubCategory
            },
            {
                path: "detail/:id",
                component: Detail
            },
            {
                path: "cart",
                component: CartList
            },
            {
                path: "checkout",
                component: Checkout
            },
            {
                path: "pay",
                component: Pay
            },
            {
                path: "/paycallback",
                component: PayBack
            },
            {
                path: "/member",
                component: Member,
                children: [
                    {
                        path: "",
                        component: UserInfo
                    },
                    {
                        path: "order",
                        component: UserOrder
                    }
                ]
            }
        ]
    },
    {
        path: "/login",
        component: Login
        // ()=>import("../views/login/index.vue")
    }
]


const router = createRouter({
    history: createWebHistory(),
    routes,
    //切换路由返回最上面
    scrollBehavior() {
        return {
            top: 0
        }
    }
})

export default router