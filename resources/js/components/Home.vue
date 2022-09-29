<template>
    <div class="p-3 mb-5 mh-75 container-fluid">
        <h1 class="text-center">Welcome!</h1>
        <div class="row">
            <div class="col-lg-12">
                <div class="container">
                    <div class="primary-logo mx-auto">
                        <img :src="mainLogoSrc" />
                    </div>
                    <p class="intro">
                        Strength Through Education is a 501c3 charity that
                        supports US Armed Forces by empowering active-duty
                        service members with free and confidential educational
                        resources and career coaching to help them navigate
                        administrative issues; this can increase retention,
                        reduce sexual assault, and reduce military suicide.
                    </p>
                </div>
            </div>
        </div>
        <div class="row red p-3">
            <div class="col-lg-6 col-md-12">
                <h2 class="text-center">Our Mission</h2>
                <p class="lead">
                    Arming our warriors for mission success through guided
                    education and career coaching.
                </p>
            </div>
            <div class="col-lg-6 col-md-12">
                <h2 class="text-center">Our Vision</h2>
                <p class="lead">
                    Our armed forces are strengthened as all service members
                    have access to resources that empower them to achieve
                    mission and career success.
                </p>
            </div>
        </div>

        <div class="statements-container p-5 background-dark">
            <h2 class="text-center">Statements of Support</h2>
            <support-statements></support-statements>
        </div>
    </div>
</template>

<script>
import axios from "axios";
import { mapState } from "vuex";
import SupportStatements from "./SupportStatements.vue";
export default {
    data() {
        return {
            mainLogoSrc: "/images/ste-logo-final.png",
        };
    },
    computed: {
        ...mapState(["teamMembers", "supportStatements"]),
    },
    components: {
        SupportStatements,
    },
};
</script>

<style lang="scss">
@import "../../scss/utilities/variables.scss";
.red {
    background: $secondary-color;
    color: whitesmoke;
    h2 {
        color: whitesmoke;
    }
    p.lead {
        padding: 1.5em;
        text-align: center;
    }
}
.primary-logo {
    display: flex;
    justify-content: center;
    img {
        max-width: 100%;
    }
}
</style>
