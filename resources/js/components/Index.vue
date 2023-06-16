<template>
    <div class="edica-loader"></div>
        <HeaderComponent></HeaderComponent>
    <div class="p-5">
        <RouterView></RouterView>
    </div>
</template>

<script>
import HeaderComponent from "@/components/Widget/Header/HeaderComponent.vue";
import {getToken} from "@/config/api/api.js";
export default {
    name: "Index",

    components: {
        HeaderComponent
    },

    mounted() {
        this.checkToken()
    },

    methods: {
        checkToken() {
            const token = getToken()

            token ? this.$store.commit('setAuthToken', token) : this.$store.commit('removeAuthToken')
        }
    }
}
</script>

<style scoped>

</style>
