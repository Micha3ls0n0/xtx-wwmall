<template>
    <nav class="app-topnav">
        <div class="container">
            <ul>
                <!--判断是否登录-->
                <template v-if="useUStore.userInfo.token">
                    <!--javascript: 是一个特殊的 URL 方案，它允许你在链接中直接执行 JavaScript 代码。-->
                    <!--; 是一个空的 JavaScript 语句，相当于什么都不做。-->
                    <li><a href="javascript:;"><i class="iconfont icon-user"></i>{{ useUStore.userInfo.account }}</a></li>
                    <li>
                        <el-popconfirm @confirm="confirmLogout" title="确认退出？" confirm-button-text="确认" cancel-button-text="取消">
                            <!--#reference 是 v-slot:reference 的简写-->
                            <template #reference>
                                <a href="javascript:;">退出登录</a>
                            </template>
                        </el-popconfirm>
                    </li>
                    <li><a href="javascript:;" >我的订单</a></li>
                    <li><a href="javascript:;" @click="router.push('/member')">会员中心</a></li>
                </template>
                <template v-else>
                    <!--<li><router-link to="/login">请先登录</router-link></li>-->
                    <li><a href="javascript:;" @click="$router.push('/login')">请先登录</a></li>
                    <li><a href="javascript:;">帮助中心</a></li>
                    <li><a href="javascript:;">关于我们</a></li>
                </template>
            </ul>
        </div>
    </nav>
</template>

<script setup>
//顶部导航栏组件
import {useUserStore} from "../../../stores/userStore.js";
import {useRouter} from "vue-router";
const router = useRouter()
const useUStore = useUserStore()
//退出登录业务逻辑
const confirmLogout = ()=>{
    //触发清除信息
    useUStore.clearUserInfo()
    //跳转登录页
    router.push("/login")
}
</script>

<style lang="scss" scoped>
    .app-topnav {
        background-color: #333;

        ul {
            display: flex; //实现水平排列
            height: 53px; //固定高度为 53 像素
            justify-content: flex-end; //内容水平右对齐
            align-items: center; //垂直居中对齐
            li {
                a {//li中a
                    padding: 0 15px; //内边距上下0左右15
                    color: #cdcdcd;
                    line-height: 1; //行高为字体大小的1倍 大小相同,没有设行内块则不能设行高
                    display: inline-block; //使元素具有类似于块级元素的功能（例如可以设置宽度和高度）
                    i {
                        font-size: 14px;
                        margin-right: 2px;//外边距
                    }

                    &:hover{
                        color: $xtxColor;//当鼠标悬停在 a 上时，文本颜色会变化为 $xtxColor
                    }
                }
                ~li{//选择当前 li 元素之后的兄弟 li 元素
                    a{
                        border-left: 2px solid #666;//左侧边框（2px，颜色为 #666），用于分隔菜单项
                    }
                }
            }
        }
    }
</style>