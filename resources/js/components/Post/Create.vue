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
                <label for="text">Text</label>
                <VueEditor
                    v-model="post.text"
                    useCustomImageHandler
                    @image-added="handleImageAdded"
                    placeholder="Enter text"
                ></VueEditor>
            </div>
            <div class="form-group">
                <div ref="dropzone" class="btn p-5 bg-dark text-white text-center">
                    Upload images
                </div>
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
import {setCursorAfterAddingImageInEditor} from "@/functional/setCursorAfterAddingImageInEditor.js";

export default {
    name: "Create",

    components: {
        VueEditor
    },

    data() {
        return {
            dropzone: null,
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
            const text = document.querySelector('.ql-editor').innerHTML;

            const data = new FormData()

            const files = this.dropzone.getAcceptedFiles()

            files.forEach(file => {
                data.append('images[]', file)

                this.dropzone.removeFile(file)
            })

            data.append('title', this.post.title)
            data.append('text', text)

            this.$store.dispatch('storePost', data)
        },

        handleImageAdded(file, Editor, cursorLocation, resetUploader) {
            const formData = new FormData();
            formData.append("image", file);

            api.post('/api/posts/images', formData)
                .then(result => {
                    const url = result.data.url;
                    Editor.insertEmbed(cursorLocation, "image", url);

                    Editor.container.querySelector(`img[src="${url}"]`).classList.add("img-fluid");

                    setCursorAfterAddingImageInEditor(Editor, url)

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

<style>

.dz-success-mark,
.dz-error-mark {
    display: none;
}

</style>
