<template>
    <div class="mb-3">
        <RouterLink :to="{ name: 'posts.create' }" class="btn btn-primary">Create post</RouterLink>
    </div>
    <div>
        <table class="table table-striped table-dark">
            <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Title</th>
                <th scope="col">Text</th>
                <th scope="col">Category</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="post in posts" :key="post.id">
                <th scope="row">{{ post.id }}</th>
                <td>{{ post.title }}</td>
                <td>{{ post.text }}</td>
                <td>{{ post.category_id === null ? 'Not has' : post.category_id }}</td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    name: "Index",

    data() {
        return {
            posts: null
        }
    },

    mounted() {
        this.index()
    },

    methods: {
        index() {
            axios.get('/api/posts')
                .then(response => this.posts = response.data)
        }
    }
}
</script>

<style scoped>

</style>
