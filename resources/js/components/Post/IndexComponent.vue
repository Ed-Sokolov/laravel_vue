<template>
    <div>
        <table class="table table-striped table-dark">
            <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Title</th>
                <th scope="col">Text</th>
                <th scope="col">Created at</th>
                <th scope="col">Updated at</th>
                <th scope="col">Actions</th>
            </tr>
            </thead>
            <tbody>
            <template v-for="post in posts" :key="post.id">
                <tr :class="isEdit(post.id) ? 'd-none' : ''">
                    <th scope="row">{{ post.id }}</th>
                    <td>{{ post.title }}</td>
                    <td>{{ post.text }}</td>
                    <td>{{ post.created_at }}</td>
                    <td>{{ post.updated_at }}</td>
                    <td>
                        <div class="d-flex flex-column gap-2">
                            <a href="#" @click.prevent="changeEditPostId(post.id)" class="btn btn-success">Edit</a>
                        </div>
                    </td>
                </tr>
                <tr :class="isEdit(post.id) ? '' : 'd-none'">
                    <th scope="row">{{ post.id }}</th>
                    <td><input type="text" class="form-control" id="title" placeholder="Enter title">
                    </td>
                    <td><textarea class="form-control" id="text" rows="3"
                                  placeholder="Enter text"></textarea></td>
                    <td>{{ post.created_at }}</td>
                    <td>{{ post.updated_at }}</td>
                    <td>
                        <div class="d-flex flex-column gap-2">
                            <a href="#" @click.prevent="resetEditPostId" class="btn btn-success">Update</a>
                            <a href="#" @click.prevent="resetEditPostId" class="btn btn-danger">Cancel</a>
                        </div>
                    </td>
                </tr>
            </template>
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
            editPostId: null
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
        },
        changeEditPostId(id) {
            this.editPostId = id;
        },
        resetEditPostId() {
            this.editPostId = null;
        },
        isEdit(id) {
            return this.editPostId === id;
        }
    },
}
</script>

<style scoped>

</style>
