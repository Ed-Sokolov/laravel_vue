<template>
    <div>
        <table class="table table-striped table-dark w-50">
            <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Title</th>
                <th scope="col">Text</th>
                <th scope="col">Created at</th>
                <th scope="col">Updated at</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="post in posts" :key="post.id">
                <th scope="row">{{ post.id }}</th>
                <td>{{ post.title }}</td>
                <td>{{ post.text }}</td>
                <td>{{ post.created_at }}</td>
                <td>{{ post.updated_at }}</td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    name: "IndexComponent",

    data() {
        return {
            posts: null,
        }
    },

    mounted() {
        this.getPosts()
    },

    methods: {
        getPosts() {
            axios.get('api/posts')
                .then(response => {
                    this.posts = response.data;
                })
                .catch(error => {

                })
        }
    },
}
</script>

<style scoped>

</style>
