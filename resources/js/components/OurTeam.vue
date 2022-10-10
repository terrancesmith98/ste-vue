<template>
    <div class="p-2">
        <carousel :settings="settings" :breakpoints="breakpoints">
            <slide
                v-for="(member, index) in teamMembers"
                :key="'member' + index"
            >
                <div class="row">
                    <div
                        class="col-lg-6 d-flex flex-column justify-content-center align-items-center p-2"
                    >
                        <p class="name p-2">
                            {{ member.first_name }} {{ member.last_name }}<br />
                            {{ member.title }}
                        </p>
                        <div class="image">
                            <img :src="`/images/${member.image}`" alt="" />
                        </div>
                    </div>
                    <div
                        class="col-lg-6 d-flex flex-column justify-content-center align-items-center p-2"
                    >
                        <div class="p3 bio" v-html="member.bio"></div>
                    </div>
                </div>
            </slide>

            <template #addons>
                <navigation />
                <pagination />
            </template>
        </carousel>
    </div>
</template>

<script>
import { mapState } from "vuex";
export default {
    data() {
        return {
            settings: {
                itemsToShow: 1,
                itemToScroll: 1,
                wrapAround: true,
            },
            breakpoints: {
                // 700px and up
                700: {
                    itemsToShow: 1,
                    itemToScroll: 1,
                },
                // 1024 and up
                1024: {
                    itemsToShow: 1,
                    itemToScroll: 1,
                },
            },
        };
    },
    computed: {
        ...mapState(["teamMembers"]),
    },
};
</script>

<style lang="scss" scoped>
.name {
    font-weight: 600;
    max-width: 250px;
}
.image {
    max-width: 250px;
    img {
        max-width: 100%;
        border-radius: 10px;
    }
}
.title {
    text-align: center;
}
.carousel__slide {
    margin: unset;
}
.bio {
    max-height: 500px;
    overflow-y: auto;
}
</style>
