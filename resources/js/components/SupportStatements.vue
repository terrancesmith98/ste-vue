<template>
    <div class="p-2">
        <carousel :settings="settings" :breakpoints="breakpoints">
            <slide
                v-for="(statement, index) in supportStatements"
                :key="'statement' + index"
            >
                <p class="statement">
                    {{ statement.review }}
                </p>
                <span class="signature">{{ statement.signature }}</span>
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
                autoplay: 3000,
            },
            breakpoints: {
                // 700px and up
                700: {
                    itemsToShow: 2,
                    itemToScroll: 1,
                },
                // 1024 and up
                1024: {
                    itemsToShow: 3,
                    itemToScroll: 1,
                },
            },
        };
    },
    computed: {
        ...mapState(["supportStatements"]),
    },
};
</script>

<style lang="scss">
.carousel {
    box-shadow: 0 0 10px #777;
}
.carousel__slide {
    padding: 2em;
    background: whitesmoke;
    color: rgb(110, 107, 94);
    margin: 0.5em;
    text-align: left;
    flex-direction: column;
    .statement {
        &::before {
            content: "\0022";
            margin-right: 0.25em;
        }
        &::after {
            content: "\0022";
            margin-left: 0.25em;
        }
    }
    .signature {
        margin-left: 1em;
        font-style: italic;
    }
}
button.carousel__next,
button.carousel__prev {
    background: #333;
}

.carousel__pagination-button {
    background-color: #8e8e8e !important;
}
.carousel__pagination-button--active {
    background-color: #333 !important;
}
.carousel__icon {
    fill: whitesmoke;
}
</style>
