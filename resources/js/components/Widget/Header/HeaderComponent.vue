<template>
    <ul class="nav justify-content-center">
        <li class="nav-item">
            <RouterLink to="/posts" class="nav-link">Posts</RouterLink>
        </li>
        <li class="nav-item">
            <RouterLink to="/tags" class="nav-link">Tags</RouterLink>
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
