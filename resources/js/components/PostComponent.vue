<template>
    <div class="p-3">
        <div class="btn btn-success m-2">
            Post Component
        </div>
        <div class="m-2">
            <CreateComponent></CreateComponent>
        </div>
        <div class="m-2">
            <IndexComponent></IndexComponent>
        </div>
    </div>
</template>

<script>
import CreateComponent from "@/components/Post/CreateComponent.vue";
import IndexComponent from "@/components/Post/IndexComponent.vue";

export default {
    name: "PostComponent",

    components: {
        CreateComponent,
        IndexComponent
    }
}
</script>

<style scoped>

</style>
