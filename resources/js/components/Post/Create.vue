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
                <textarea v-model="post.text" class="form-control" id="text" rows="3"
                          placeholder="Enter text"></textarea>
            </div>
            <div class="form-group">
                <div ref="dropzone" class="btn p-5 bg-dark text-white text-center">
                    Upload images
                </div>
            </div>
            <div class="form-group">
                <VueEditor
                    v-model="content"
                    useCustomImageHandler
                    @image-added="handleImageAdded"
                ></VueEditor>
            </div>
            <div class="form-group">
                <button :disabled="isDisabled" @click.prevent="store" type="submit" class="btn btn-primary">Add</button>
            </div>
        </form>
    </div>
</template>

<script>
import {mapGetters} from "vuex";
import {Dropzone} from "dropzone";
import {VueEditor} from "vue3-editor";
import api from "@/config/api/api.js";

export default {
    name: "Create",

    components: {
      VueEditor
    },

    data() {
        return {
            dropzone: null,
            content: 'Hello'
        }
    },

    mounted() {
        this.dropzone = new Dropzone(this.$refs.dropzone, {
            url: '/',
            autoProcessQueue: false,
            addRemoveLinks: true
        })

        this.$store.commit('setPost', {title: '', text: '', images: null})
    },

    methods: {
        store() {
            const data = new FormData()

            const files = this.dropzone.getAcceptedFiles()

            files.forEach(file => {
                data.append('images[]', file)

                this.dropzone.removeFile(file)
            })

            data.append('title', this.post.title)
            data.append('text', this.post.text)

            this.$store.dispatch('storePost', data)
        },

        handleImageAdded(file, Editor, cursorLocation, resetUploader) {
            const formData = new FormData();
            formData.append("image", file);

            api.post('/api/posts/images', formData)
                .then(result => {
                    const url = result.data.url; // Get url from response
                    Editor.insertEmbed(cursorLocation, "image", url);
                    resetUploader();
                })
                .catch(err => {
                    console.log(err);
                });
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
