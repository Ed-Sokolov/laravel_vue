<template>
    <div class="edica-loader"></div>
        <HeaderComponent></HeaderComponent>
    <div class="p-5">
        <RouterView></RouterView>
    </div>
</template>

<script>
import HeaderComponent from "@/components/Widget/Header/HeaderComponent.vue";
export default {
    name: "Index",

    components: {
        HeaderComponent
    }
}
</script>

<style scoped>

</style>
