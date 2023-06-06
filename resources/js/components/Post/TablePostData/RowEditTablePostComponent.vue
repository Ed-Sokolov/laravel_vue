<template>
    <tr :class="this.$parent.isEdit(post.id) ? '' : 'd-none'">
        <th scope="row">{{ post.id }}</th>
        <td><input type="text" v-model="title" class="form-control" id="title" placeholder="Enter title">
        </td>
        <td><textarea v-model="text" class="form-control" id="text" rows="3"
                      placeholder="Enter text"></textarea></td>
        <td>{{ post.created_at }}</td>
        <td>{{ post.updated_at }}</td>
        <td>
            <div class="d-flex flex-column gap-2">
                <a href="#" @click.prevent="updatePost(post.id)" class="btn btn-success">Update</a>
                <a href="#" @click.prevent="resetEditPostId()" class="btn btn-danger">Cancel</a>
            </div>
        </td>
    </tr>
</template>

<script>
export default {
    name: "RowEditTablePostComponent",

    data() {
      return {
          title: null,
          text: null
      }
    },

    props: [
        'post'
    ],

    methods: {
        updatePost(postId) {
            axios.patch(`api/posts/${postId}`, {
                title: this.title,
                text: this.text
            })
                .then(response => {
                    this.resetEditPostId();
                    this.$parent.getPosts();
                })
        },

        resetEditPostId() {
            this.$parent.editPostId = null;
            this.title = null;
            this.text = null;
        },
    }
}
</script>

<style scoped>

</style>
