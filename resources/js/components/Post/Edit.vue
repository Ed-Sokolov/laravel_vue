<template>
    <div class="mb-3">
        <RouterLink :to="{name: 'posts.show', params: {id: post.id}}" class="btn btn-outline-primary">Back to post
        </RouterLink>
    </div>
    <div v-if="post">
        <form class="d-flex flex-column gap-3 w-75">
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
                <button :disabled="isDisabled" @click.prevent="update" type="submit" class="btn btn-success">Update
                </button>
            </div>
        </form>
    </div>
</template>

<script>
import {mapGetters} from "vuex";
import {VueEditor} from "vue3-editor";
import api from "@/config/api/api.js";
import {setCursorAfterAddingImageInEditor} from "@/functional/setCursorAfterAddingImageInEditor.js";
import {Dropzone} from "dropzone";

export default {
    name: "Edit",

    components: {
        VueEditor
    },

    data() {
        return {
            dropzone: null,
            idImagesForDeleting: []
        }
    },

    mounted() {
        this.dropzone = new Dropzone(this.$refs.dropzone, {
            url: '/',
            autoProcessQueue: false,
            addRemoveLinks: true
        })

        this.dropzone.on('removedfile', file => {
            this.idImagesForDeleting.push(file.id)
        })

        this.$store.dispatch('getPost', this.$route.params.id)
            .then(() => {
                this.post.images.forEach(image => {
                    let file = {id: image.id, name: image.name, size: image.size};
                    this.dropzone.displayExistingFile(file, image.url);
                })
            })
    },

    methods: {
        update() {
            const text = document.querySelector('.ql-editor').innerHTML;

            const formData = new FormData()

            const files = this.dropzone.getAcceptedFiles()

            files.forEach(file => {
                formData.append('images[]', file)

                this.dropzone.removeFile(file)
            })

            this.idImagesForDeleting.forEach(idForDeleting => {
                if (idForDeleting) {
                    formData.append('id_images_for_deleting[]', idForDeleting)
                }
            })

            formData.append('title', this.post.title)
            formData.append('text', text)
            formData.append('_method', 'PATCH')

            const data = {
                id: this.post.id,
                formData
            }

            this.$store.dispatch('updatePost', data)
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
