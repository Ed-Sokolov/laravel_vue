<template>
    <div class="mb-3">
        <a @click.prevent="$router.go(-1)" class="btn btn-outline-primary">Back</a>
    </div>
    <div>
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
                <button @click.prevent="store" type="submit" class="btn btn-primary">Add</button>
            </div>
        </form>
    </div>
</template>

<script>
import router from "@/router.js";

export default {
    name: "Create",

    data() {
        return {
            title: null,
            text: null
        }
    },

    methods: {
        store() {
            axios.post('/api/posts', {
                title: this.title,
                text: this.text
            })
                .then(response => {
                    router.push({name: 'posts.index'});
                })
        }
    }
}
</script>

<style scoped>

</style>
