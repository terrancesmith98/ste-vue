<template>
    <div class="p-3">
        <h1>Welcome to Strength Through Education</h1>
        <div class="card" v-for="(member, index) in teamMembers">
            <h4>{{ member.first_name }}</h4>
        </div>
    </div>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import { mapState } from "vuex";
export default {
    data() {
        return {
            settings: {
                dots: true,
                dotsClass: "slick-dots custom-dot-class",
                edgeFriction: 0.35,
                infinite: true,
                speed: 500,
                autoplay: true,
                controls: true,
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        };
    },
    computed: {
        ...mapState(["teamMembers"]),
    },
    components: {
        VueSlickCarousel,
    },
    created() {
        this.$store.dispatch("loadTeamMembers");
    },
};
</script>
