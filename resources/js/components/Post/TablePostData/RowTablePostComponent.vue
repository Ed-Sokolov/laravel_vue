<template>
    <tr :class="this.$parent.isEdit(post.id) ? 'd-none' : ''">
        <th scope="row">{{ post.id }}</th>
        <td>{{ post.title }}</td>
        <td>{{ post.text }}</td>
        <td>{{ post.created_at }}</td>
        <td>{{ post.updated_at }}</td>
        <td>
            <div class="d-flex flex-column gap-2">
                <a href="#" @click.prevent="changeEditPostId(post)" class="btn btn-success">Edit</a>
                <a href="#" @click.prevent="destroyPost(post.id)" class="btn btn-danger">Delete</a>
            </div>
        </td>
    </tr>
</template>

<script>
export default {
    name: "RowTablePostComponent",

    props: [
        'post'
    ],

    methods: {
        changeEditPostId(post) {
            let {id, title, text} = post;
            this.$parent.editPostId = id;
            let refName = `row_edit_post_${id}`;
            this.$parent.$refs[refName][0].title = title
            this.$parent.$refs[refName][0].text = text;
        },

        destroyPost(postId) {
            axios.delete(`api/posts/${postId}`)
                .then(response => {
                    this.$parent.getPosts();
                })
        },
    }
}
</script>

<style scoped>

</style>
