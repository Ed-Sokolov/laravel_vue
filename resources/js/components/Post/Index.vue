<template>
    <div>
        <RouterLink :to="{ name: 'posts.create' }" class="btn btn-primary">Create post</RouterLink>
    </div>
    <div>
        Index
    </div>
</template>

<script>
export default {
    name: "Index"
}
</script>

<style scoped>

</style>
