<template>
    <ul class="nav justify-content-center">
        <li class="nav-item">
            <RouterLink :to="{ name: 'posts.index' }" class="nav-link">Posts</RouterLink>
        </li>
    </ul>
</template>

<script>
export default {
    name: "HeaderComponent"
}
</script>

<style scoped>

</style>
