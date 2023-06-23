<template>
    <div class="mb-3">
        <RouterLink :to="{ name: 'posts.create' }" class="btn btn-primary">Create post</RouterLink>
    </div>
    <div v-if="posts">
        <table class="table table-striped table-dark">
            <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Title</th>
                <th scope="col">Category</th>
                <th scope="col">Preview</th>
                <th scope="col">Actions</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="post in posts" :key="post.id">
                <th scope="row">{{ post.id }}</th>
                <td>{{ post.title }}</td>
                <td>{{ post.category === null ? 'Not has' : post.category }}</td>
                <td>
                    <div class="d-flex gap-2 align-items-center">
                        <template v-for="image in post['images']" >
                            <img :src="image['preview_url']" alt="">
                        </template>
                    </div>
                </td>
                <td>
                    <div class="d-flex flex-column gap-2">
                        <RouterLink :to="{ name: 'posts.show', params: {id: post.id} }" class="btn btn-primary">Show
                        </RouterLink>
                        <RouterLink :to="{ name: 'posts.edit', params: {id: post.id} }" class="btn btn-success">Edit
                        </RouterLink>
                        <button href="#" @click.prevent="destroy(post.id)" class="btn btn-danger">Delete</button>
                    </div>
                </td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
    name: "Index",

    mounted() {
        this.$store.dispatch('getPosts')
    },

    methods: {
        destroy(id) {
            this.$store.dispatch('destroyPost', id)
                .then(response => this.$store.dispatch('getPosts'))
        }
    },

    computed: {
        ...mapGetters({
            posts: 'posts'
        })
    }
}
</script>

<style scoped>

</style>
