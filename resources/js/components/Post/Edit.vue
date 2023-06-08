<template>
    <div class="mb-3">
        <a @click.prevent="$router.go(-1)" class="btn btn-outline-primary">Back</a>
    </div>
    <div v-if="post">
        <form class="d-flex flex-column gap-3 w-50">
            <div class="form-group">
                <label for="title">Title</label>
                <input type="text" v-model="post.title" class="form-control" id="title" placeholder="Enter title">
            </div>
            <div class="form-group">
                <label for="text">Example textarea</label>
                <textarea v-model="post.text" class="form-control" id="text" rows="3" placeholder="Enter text"></textarea>
            </div>
            <div class="form-group">
                <button :disabled="isDisabled" @click.prevent="update" type="submit" class="btn btn-success">Update
                </button>
            </div>
        </form>
    </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
    name: "Edit",

    mounted() {
        this.$store.dispatch('getPost', this.$route.params.id)
    },

    methods: {
        update() {
            this.$store.dispatch('updatePost', this.post)
        },
    },

    computed: {
        ...mapGetters({
            isDisabled: 'isDisabled',
            post: 'post'
        })
    }
}
</script>

<style scoped>

</style>
