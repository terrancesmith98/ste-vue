<template>
    <main-nav />
    <router-view :key="$route.fullPath"></router-view>
    <div
        id="donate"
        class="d-flex justify-content-center align-items-center p-3"
        :class="{ hide: !showDonate }"
        ref="donate-btn"
    >
        <a
            href="https://www.paypal.com/donate?hosted_button_id=9EPGWCVZQ7WKW"
            target="blank"
            class="btn btn-info text-dark"
            >DONATE NOW</a
        >
    </div>
    <main-footer />
</template>

<script>
import MainNav from "./components/MainNav.vue";
import MainFooter from "./components/MainFooter.vue";

export default {
    data() {
        return {
            showDonate: false,
            lastScrollPosition: 0,
        };
    },
    components: {
        MainNav,
        MainFooter,
    },
    mounted() {
        window.addEventListener("scroll", this.onScroll);
    },
    beforeDestroy() {
        window.removeEventListener("scroll", this.onScroll);
    },
    methods: {
        onScroll() {
            const currentScrollPosition =
                window.pageYOffset || document.documentElement.scrollTop;
            if (currentScrollPosition < 0) {
                return;
            }
            // Stop executing this function if the difference between
            // current scroll position and last scroll position is less than some offset
            if ((this.showDonate = window.pageYOffset > 300)) {
                this.showDonate = true;
            } else {
                return;
            }
        },
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
#donate {
    position: fixed;
    bottom: 2rem;
    right: 2rem;
    &.hide {
        display: none !important;
    }
}
</style>
