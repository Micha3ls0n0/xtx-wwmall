<script setup>
    import {zhCn} from "element-plus/es/locale/index";
</script>

<template>
    <!--<el-button type="primary">按钮</el-button>-->
    <!--<header>-->
    <!--    <h1>test</h1>-->
    <!--</header>-->
    <!--<el-config-provider :locale="zhCn">-->
    <!--    <router-view/>-->
    <!--</el-config-provider>-->
    <router-view/>
</template>

<style scoped lang="scss">
    header {
        //调用scss文件中的变量
        color: $warnColor;
    }
</style>
