<template>
    <form class="w-50 d-flex flex-column gap-2">
        <div class="form-group">
            <label for="title">Title</label>
            <input type="text" class="form-control" v-model="title" id="title" placeholder="Enter title">
        </div>
        <div class="form-group">
            <label for="text">Text</label>
            <textarea class="form-control" v-model="text" id="text" rows="3" placeholder="Enter text"></textarea>
        </div>
        <div class="form-group">
            <button @click.prevent="addPost" type="submit" class="btn btn-primary">Add</button>
        </div>
    </form>
</template>

<script>
export default {
    name: "CreateComponent",

    data() {
        return {
            title: null,
            text: null,
        }
    },

    methods: {
        addPost() {
            axios.post('api/posts', {
                title: this.title,
                text: this.text
            })
                .then(response => {
                    this.title = null;
                    this.text = null;
                })
        }
    }
}
</script>

<style scoped>

</style>
