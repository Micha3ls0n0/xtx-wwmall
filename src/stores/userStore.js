import {loginAPI} from "../apis/user.js";
import {defineStore} from "pinia";
import {useCartStore} from "./cartStore.js";
import {mergeCartAPI} from "../apis/cart.js";

export const useUserStore = defineStore("user", () => {
        const userInfo = ref({})
        const cartStore = useCartStore()
        const getUserInfo = async (user) => {
            const res = await loginAPI(user)
            userInfo.value = res.result
            // 登录后更新购物车
            await mergeCartAPI(cartStore.cartList.map(item => {
                return {
                    skuId: item.skuId,
                    selected: item.selected,
                    count: item.count
                }
            }))
            cartStore.updateLoginCartList()
        }
        //退出登录同时清空购物车
        const clearUserInfo = () => {
            userInfo.value = {}
            cartStore.clearCart()
        }
        return {
            userInfo,
            getUserInfo,
            clearUserInfo
        }
    },
    {
        //设置持久化
        persist: true
    }
)