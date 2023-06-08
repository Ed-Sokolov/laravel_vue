<template>
    <div class="mb-3">
        <a @click.prevent="$router.go(-1)" class="btn btn-outline-primary">Back</a>
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
                <td>{{ key }}</td>
                <td>{{ item === null ? 'Not has' : item }}</td>
            </tr>
            </tbody>
        </table>
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
