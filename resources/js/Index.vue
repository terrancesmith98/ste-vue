<template>
    <main-nav />
    <router-view :key="$route.fullPath"></router-view>
    <main-footer />
</template>

<script>
import MainNav from "./components/MainNav.vue";
import MainFooter from "./components/MainFooter.vue";

export default {
    components: {
        MainNav,
        MainFooter,
    },
};
</script>

<style lang="scss">
h1 {
    font-family: "Roboto", Arial, Helvetica, sans-serif;
}
</style>
