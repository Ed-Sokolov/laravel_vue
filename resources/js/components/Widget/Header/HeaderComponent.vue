<template>
    <header class="edica-header">
        <div class="container">
            <nav class="navbar navbar-expand-lg navbar-light">
                <RouterLink :to="{name: 'main.index'}">
                    <img :src="logoSrc" alt="Edica">
                </RouterLink>
                <button class="navbar-toggler d-lg-none" type="button" data-toggle="collapse"
                        data-target="#edicaMainNav"
                        aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="edicaMainNav">
                    <ul class="navbar-nav mx-auto mt-2 mt-lg-0">
                        <li class="nav-item">
                            <RouterLink :to="{name: 'main.index'}" class="nav-link">Home</RouterLink>
                        </li>
                        <li class="nav-item">
                            <RouterLink :to="{ name: 'posts.index' }" class="nav-link">Posts</RouterLink>
                        </li>
                    </ul>
                    <div class="btn-group mt-2 mt-lg-0" role="group" aria-label="Basic example">
                        <RouterLink :to="{ name: 'auth.login' }" class="btn btn-info">Sign In</RouterLink>
                        <RouterLink :to="{ name: 'auth.registration' }" class="btn btn-info">Sign Up</RouterLink>
                    </div>
                </div>
            </nav>
        </div>
    </header>
</template>

<script>
export default {
    name: "HeaderComponent",

    data() {
        return {
            logoSrc: "/assets/images/logo.svg"
        }
    }
}
</script>

<style scoped>

</style>
