<template>
    <div class="p-3 mb-5 mh-75">
        <h1>Welcome to Strength Through Education</h1>
        <div class="statements-container p-5 background-dark">
            <h2>Statements of Support</h2>
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
        return {};
    },
    computed: {
        ...mapState(["teamMembers", "supportStatements"]),
    },
    components: {
        SupportStatements,
    },
};
</script>

<style lang="scss"></style>
