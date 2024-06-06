<template>
    <LayoutFixed></LayoutFixed>
    <LayoutNav></LayoutNav>
    <LayoutHeader></LayoutHeader>
    <router-view></router-view>
    <LayoutFooter></LayoutFooter>
</template>

<script setup>
//一级路由-页面的top nav button内容
import LayoutNav from "./components/layoutNav.vue";
import LayoutHeader from "./components/layoutHeader.vue";
import LayoutFooter from "./components/layoutFooter.vue";
import LayoutFixed from "./components/layoutFixed.vue";
</script>

<style lang="scss" scoped>

</style>