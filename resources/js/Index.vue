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
@import "../scss/utilities/variables";
body {
    font-family: "Highgate", Arial, Helvetica, sans-serif;
    background-color: #f0f0e7;
}
h1 {
    text-transform: uppercase;
    color: $primary-color;
}
h2 {
    font-size: 1.5em;
    color: $secondary-color;
}
</style>
