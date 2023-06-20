<template>
    <div class="mb-3">
        <RouterLink :to="{name: 'posts.index'}" class="btn btn-outline-primary">Back to posts</RouterLink>
    </div>
    <div v-if="post" class="mb-3">
        <table class="table table-striped table-dark">
            <thead>
            <tr>
                <th scope="col">Attribute</th>
                <th scope="col">Value</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(item, key) in post" :key="key">
                <template v-if="key !== 'images'">
                    <td>{{ key }}</td>
                    <td>{{ item === null ? 'Not has' : item }}</td>
                </template>
            </tr>
            </tbody>
        </table>
    </div>
    <div v-if="post" class="mb-3 bg-dark p-3 d-flex gap-3 align-items-center">
        <template v-for="image in post['images']">
            <img :src="image['url']" alt="" class="w-25">
        </template>
    </div>
    <div v-if="post" class="d-flex gap-2">
        <RouterLink :to="{ name: 'posts.edit', params: {id: post.id} }" class="btn btn-success">Edit</RouterLink>
        <button href="#" @click.prevent="destroy(post.id)" class="btn btn-danger">Delete</button>
    </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
    name: "Show",

    mounted() {
        this.$store.dispatch('getPost', this.$route.params.id)
    },

    methods: {
        destroy(id) {
            this.$store.dispatch('destroyPost', id)
        }
    },

    computed: {
        ...mapGetters({
            post: 'post'
        })
    }
}
</script>

<style scoped>

</style>
