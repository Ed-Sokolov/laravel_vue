<template>
    <div class="mb-3">
        <RouterLink :to="{name: 'posts.index'}" class="btn btn-outline-primary">Back to posts</RouterLink>
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
                <button :disabled="isDisabled" @click.prevent="store" type="submit" class="btn btn-primary">Add</button>
            </div>
        </form>
    </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
    name: "Create",

    mounted() {
        this.$store.commit('setPost', {title: '', text: ''})
    },

    methods: {
        store() {
            let data = {
                title: this.post.title,
                text: this.post.text
            }

            this.$store.dispatch('storePost', data)
        }
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
