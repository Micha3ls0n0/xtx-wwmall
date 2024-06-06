import { createApp } from 'vue'
import App from './App.vue'

import "./styles/common.scss"
import {getCategoryAPI} from "./apis/testAPI.js";

import router from "./router"

import {createPinia} from "pinia";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate"
// import {useIntersectionObserver} from "@vueuse/core";
//注册全局指令
import {lazyPlugin} from "./directives/index.js";

import {componentPlugin} from "./components/index.js";

//创建一个Pinia实例,将Pinia实例注册到Vue应用中(必做！)
const pinia = createPinia()
const app = createApp(App)
pinia.use(piniaPluginPersistedstate)
app.use(pinia)

app.use(router)

app.use(lazyPlugin)

app.use(componentPlugin)

// getCategoryAPI().then(res=>{
//     console.log(res);
// })
// console.log(getCategoryAPI())

// app.directive('img-lazy',{
//     //el:指令绑定元素 img
//     //binding:binding.value 指令=后面表达式的值 图片url
//     mounted(el,binding){
//         //console.log(el,binding.value)
//         const { stop } = useIntersectionObserver(
//             el,
//             ([{ isIntersecting }]) => {
//                 // console.log(isIntersecting)
//                 if(isIntersecting){//焦点为真时，给图片src赋值，也就加载图片
//                     el.src = binding.value;
//                     stop();//避免重复判断加载
//                 }
//             },
//         )
//     }
// })
// app.directive('img-lazy',{
//     mounted(el,binding){
//         console.log(el,binding.value)
//     }
// })
app.mount('#app')