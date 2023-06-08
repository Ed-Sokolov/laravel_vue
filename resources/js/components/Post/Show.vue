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
        <RouterLink :to="{ name: 'posts.edit', params: {id} }" class="btn btn-success">Edit</RouterLink>
        <button href="#" @click.prevent="destroy" class="btn btn-danger">Delete</button>
    </div>
</template>

<script>
export default {
    name: "Show",

    data() {
        return {
            id: this.$route.params.id
        }
    },

    mounted() {
        this.$store.dispatch('getPost', this.id);
    },

    methods: {
        destroy() {
            axios.delete(`/api/posts/${this.id}`)
                .then(response => this.$router.push({name: 'posts.index'}))
        }
    },

    computed: {
        post() {
            return this.$store.getters.post
        }
    }
}
</script>

<style scoped>

</style>
