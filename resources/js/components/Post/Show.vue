<template>
    <div v-if="post">
        <div class="d-flex gap-2">
            <RouterLink :to="{ name: 'posts.edit', params: {id: post.id} }" class="btn btn-success">Edit</RouterLink>
            <button href="#" @click.prevent="destroy(post.id)" class="btn btn-danger">Delete</button>
        </div>
        <main class="blog-post mb-3">
            <div class="container">
                <h1 class="edica-page-title" data-aos="fade-up">{{ post.title }}</h1>
                <p class="edica-blog-post-meta" data-aos="fade-up" data-aos-delay="200">
                    • {{ post.created_at }} • </p>
                <section class="blog-post-featured-img" data-aos="fade-up" data-aos-delay="300" v-if="post['images']">
                    <img :src="post['images'][0]['url']" alt="featured image" class="w-100">
                </section>
                <section class="post-content">
                    <div class="row">
                        <div v-html="post.text" id="content">
                        </div>
                    </div>
                </section>
            </div>
        </main>
    </div>
</template>

<script>
import {mapGetters} from "vuex";
import AOS from 'aos';
import {getAnimatedContent} from "@/functional/getAnimatedContent.js";

export default {
    name: "Show",

    mounted() {
        this.$store.commit('setPost', null)

        this.$store.dispatch('getPost', this.$route.params.id)
            .then(() => {
                getAnimatedContent()
            })
            .then(() => {
                setTimeout(() => {
                    AOS.refresh()
                }, 1000)
            })
    },

    methods: {
        destroy(id) {
            this.$store.dispatch('destroyPost', id)
        }
    },

    computed: {
        ...mapGetters({
            post: 'post'
        })
    }
}
</script>

<style scoped>

</style>
