<template>
    <div class="container-fluid p-5">
        <h2>FAQs</h2>
        <dl v-for="(faq, index) in faqs" :key="'faq' + index">
            <dt>{{ faq.question }}</dt>
            <dd>{{ faq.answer }}</dd>
        </dl>
    </div>
</template>

<script>
import { mapState } from "vuex";
export default {
    data() {
        return {};
    },
    computed: {
        ...mapState(["faqs"]),
    },
};
</script>

<style lang="scss"></style>
