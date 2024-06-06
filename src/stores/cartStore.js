import {defineStore} from "pinia";
import {computed} from "vue";
import {useUserStore} from "./userStore.js";
import {delCartAPI, findNewCartListAPI, insertCartAPI, updateCartItem} from "../apis/cart.js";

export const useCartStore = defineStore("cart", () => {
        //购物车数组
        const cartList = ref([])
        const userStore = useUserStore()
        const isLogin = computed(() => userStore.userInfo.token)

        //获取登录后最新购物车列表action
        const updateLoginCartList = async () => {
            const res = await findNewCartListAPI()
            cartList.value = res.result
            console.log("updateLoginCartList", res.result)
        }
        const addCart = async (goods) => {
            //(item)=>{ return goods.skuId === item.skuId}
            //遍历购物车，查找是否有已存在的相同skuid,如果有，返回这个商品信息
            //这里的skuid来自detail/index.vue中addCart方法定义的，其数据源返回自Sku组件
            // const findItem = cartList.value.find(item => goods.skuId === item.skuId)
            // if (findItem) {
            //     //返回的商品信息存findItem中，其中商品数加上传入的数量
            //     findItem.count += goods.count
            // } else {
            //     cartList.value.push(goods)
            // }

            //登录之后加入购物车逻辑
            if (isLogin.value) {
                await insertCartAPI(goods)
                updateLoginCartList()
            } else {
                const findItem = cartList.value.find(item => goods.skuId === item.skuId)
                if (findItem) {
                    findItem.count += goods.count
                } else {
                    cartList.value.push(goods)
                }
            }
        }
        //删除商品
        const delCart = async (skuId) => {
            if (isLogin.value) {
                console.log("delCart,skuid", skuId)
                await delCartAPI([skuId])
                updateLoginCartList()
            } else {
                const index = cartList.value.findIndex((item) => skuId === item.skuId)
                //使用splice删除找到的项
                cartList.value.splice(index, 1)
            }
        }
        //商品总数 -不懂
        const allCount = computed(() => cartList.value.reduce((a, c) => a + c.count, 0))
        //总价
        const allPrice = computed(() => cartList.value.reduce((a, c) => a + c.count * c.price, 0))
        //全选框 绑定选中状态，将购物车中的所有选中状态遍历更改
        const checkAll = (selected) => {
            cartList.value.forEach(item => item.selected = selected)
        }
        //检查是否全选
        const isAll = computed(() => cartList.value.every((item) => item.selected))
        //已选择数量
        const selectedCount = computed(() => cartList.value.filter(item => item.selected).reduce((a, c) => a + c.count, 0))
        //已选择总价
        const selectedPrice = computed(() => cartList.value.filter(item => item.selected).reduce((a, c) => a + c.count * c.price, 0))
        //清空购物车
        const clearCart = () => {
            cartList.value = []
        }
        //修改购物项
        const updateCart = async (goods) => {
            const {skuId, count, selected} = goods
            if (isLogin.value) {
                await updateCartItem(skuId, {count,selected})
            }
        }

        return {
            cartList,
            addCart,
            delCart,
            allCount,
            allPrice,
            isAll,
            checkAll,
            selectedCount,
            selectedPrice,
            updateLoginCartList,
            clearCart,
            updateCart
        }
    },
    {
        persist: true
    })