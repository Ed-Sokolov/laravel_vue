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
                <RowPost :post="post" :ref="`row_post_${post.id}`"></RowPost>
                <RowEditPost :post="post" :ref="`row_edit_post_${post.id}`"></RowEditPost>
            </template>
            </tbody>
        </table>
    </div>
</template>

<script>
import RowTablePostComponent from "@/components/Post/TablePostData/RowTablePostComponent.vue";
import RowEditTablePostComponent from "@/components/Post/TablePostData/RowEditTablePostComponent.vue";

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
        },

        isEdit(id) {
            return this.editPostId === id;
        },
    },

    components: {
        'RowPost': RowTablePostComponent,
        'RowEditPost': RowEditTablePostComponent
    }
}
</script>

<style scoped>

</style>
