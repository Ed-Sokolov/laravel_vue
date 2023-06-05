<template>
    <div class="p-3">
        <div class="btn btn-success m-2">
            Post Component
            <SinglePostComponent></SinglePostComponent>
        </div>

    </div>
</template>

<script>
import SinglePostComponent from "@/components/SinglePostComponent.vue";

export default {
    name: "PostComponent",

    data() {
        return {

        }
    },

    mounted() {
        this.getPosts();
    },

    methods: {
        getPosts() {
            axios.get('/posts').then(response => {
                console.log(response.data);
            })
        }
    },

    computed: {
    },

    components: {
        SinglePostComponent
    }
}
</script>

<style scoped>

</style>
