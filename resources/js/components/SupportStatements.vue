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
.carousel__slide {
    padding: 2em;
    background: whitesmoke;
    color: #333;
    margin: 0.5em;
    text-align: left;
    flex-direction: column;
    .statement {
        &::before {
            content: "\0022";
            margin-right: 0.5em;
        }
        &::after {
            content: "\0022";
            margin-left: 0.5em;
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
.button.carousel__pagination {
    background: #666;
    &:active {
        background: #333;
    }
}
.carousel__icon {
    fill: whitesmoke;
}
</style>
