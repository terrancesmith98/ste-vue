<template>
    <footer>
        <div class="row p-3">
            <div
                class="col-lg-12 d-flex justify-content-center align-items-center"
            >
                <p class="text-center">
                    Copyright {{ currentYear }} - Strength Through Education.
                    All Rights Reserved.
                </p>
            </div>
        </div>
        <div class="row p-1">
            <p class="text-center">
                Strength Through Education, Inc is a tax-exempt 501(C)(3)
                nonprofit organization:<br />
                NYS Registration 48-94-82<br />
                Alabama Registration AL-22-274
            </p>
        </div>
    </footer>
</template>

<script>
export default {
    data() {
        return {
            currentYear: new Date().getFullYear(),
        };
    },
};
</script>

<style lang="scss">
footer {
    background: #333;
    color: whitesmoke;
    width: 100%;
}
</style>
