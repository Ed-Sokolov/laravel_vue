<template>
    <div class="mb-3">
        <a @click.prevent="$router.go(-1)" class="btn btn-outline-primary">Back</a>
    </div>
    <div v-if="title && text">
        <form class="d-flex flex-column gap-3 w-50">
            <div class="form-group">
                <label for="title">Title</label>
                <input type="text" v-model="title" class="form-control" id="title" placeholder="Enter title">
            </div>
            <div class="form-group">
                <label for="text">Example textarea</label>
                <textarea v-model="text" class="form-control" id="text" rows="3" placeholder="Enter text"></textarea>
            </div>
            <div class="form-group">
                <button @click.prevent="update" type="submit" class="btn btn-success">Update</button>
            </div>
        </form>
    </div>
</template>

<script>
import router from "@/router.js";

export default {
    name: "Edit",

    data() {
        return {
            id: this.$route.params.id,
            title: null,
            text: null
        }
    },

    mounted() {
        this.show();
    },

    methods: {
        show() {
            axios.get(`/api/posts/${this.id}`)
                .then(response => {
                    let {id, title, text} = response.data;

                    this.id = id;
                    this.title = title;
                    this.text = text;
                })
        },

        update() {
            axios.patch(`/api/posts/${this.id}`, {
                title: this.title,
                text: this.text
            })
                .then(response => router.push({name: 'posts.show', params: {id: this.id}}))
        },
    }
}
</script>

<style scoped>

</style>
