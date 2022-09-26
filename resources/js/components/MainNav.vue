<template>
    <!-- Nav tabs -->
    <ul class="nav nav-tabs" id="navId">
        <li class="logo">
            <img src="/images/ste-logo-final.png" alt="" />
        </li>

        <li class="nav-item">
            <a href="#tab1Id" class="nav-link active">Active</a>
        </li>
        <li class="nav-item dropdown">
            <a
                class="nav-link dropdown-toggle"
                data-toggle="dropdown"
                href="#"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
                >Dropdown</a
            >
            <div class="dropdown-menu">
                <a class="dropdown-item" href="#tab2Id">Action</a>
                <a class="dropdown-item" href="#tab3Id">Another action</a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#tab4Id">Action</a>
            </div>
        </li>
        <li class="nav-item">
            <a href="#tab5Id" class="nav-link">Another link</a>
        </li>
        <li class="nav-item">
            <a href="#" class="nav-link disabled">Disabled</a>
        </li>
    </ul>

    <!-- Tab panes -->
    <div class="tab-content">
        <div
            class="tab-pane fade show active"
            id="tab1Id"
            role="tabpanel"
        ></div>
        <div class="tab-pane fade" id="tab2Id" role="tabpanel"></div>
        <div class="tab-pane fade" id="tab3Id" role="tabpanel"></div>
        <div class="tab-pane fade" id="tab4Id" role="tabpanel"></div>
        <div class="tab-pane fade" id="tab5Id" role="tabpanel"></div>
    </div>
</template>

<script>
// $("#navId a").click((e) => {
//     e.preventDefault();
//     $(this).tab("show");
// });
</script>

<style lang="scss">
nav {
    background: #333;
    color: whitesmoke;
    height: 100px;
}

.logo {
    padding: 0.5em;
    width: 150px;
    img {
        max-width: 100%;
    }
}
</style>
