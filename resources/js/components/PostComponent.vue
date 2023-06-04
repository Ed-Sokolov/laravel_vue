<template>
    <div class="p-3">
        <div class="btn btn-success m-2">
            Post Component
            <SinglePostComponent></SinglePostComponent>
        </div>
        <table class="table table-striped table-dark m-2 w-50">
            <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Age</th>
                <th scope="col">Job</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="person in people" :key="person.id">
                <th scope="row">{{person.id}}</th>
                <td>{{person.name}}</td>
                <td>{{person.age}}</td>
                <td>{{person.job}}</td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import SinglePostComponent from "@/components/SinglePostComponent.vue";

export default {
    name: "PostComponent",

    data() {
        return {
            people: [
                {
                    id: 1,
                    name: 'John',
                    age: 25,
                    job: 'Developer'
                },
                {
                    id: 2,
                    name: 'Erick',
                    age: 30,
                    job: 'Driver'
                },
                {
                    id: 3,
                    name: 'Mark',
                    age: 27,
                    job: 'Blogger'
                }
            ]
        }
    },

    components: {
        SinglePostComponent
    }
}
</script>

<style scoped>

</style>
