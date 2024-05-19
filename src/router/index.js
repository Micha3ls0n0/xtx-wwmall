import {createRouter, createWebHistory} from "vue-router";
import Layout from "../views/layout/index.vue"
import Login from "../views/login/index.vue"
import Home from "../views/home/index.vue"
import Category from "../views/category/index.vue"

const routes = [
    {
        path:"/",
        component:Layout,
        // ()=>import("../views/layout/index.vue")
        children:[{
            //子路由不设置path代表在父路由同一页面
            path:"",
            component:Home
        },
            {

            path:"category",
            component:Category
        }]
    },
    {
        path:"/login",
        component:Login
        // ()=>import("../views/login/index.vue")
    }
]

const router = createRouter({
    history:createWebHistory(),
    routes
})

export default router