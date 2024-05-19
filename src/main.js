import { createApp } from 'vue'
import App from './App.vue'

import "./styles/common.scss"
import {getCategoryAPI} from "./apis/testAPI.js";

import router from "./router"


createApp(App).use(router).mount('#app')

getCategoryAPI().then(res=>{
    console.log(res);
})
// console.log(getCategoryAPI())