<template>
    <div class="btn btn-success m-2">
        Post Component
        <SinglePostComponent></SinglePostComponent>
    </div>
    <div class="btn btn-warning m-2">
        <div>
            Name: {{name}}
        </div>
        <div>
            Age: {{age}}
        </div>
        <div>
            Is worker: {{isWorker}}
        </div>
        <div>
            Job: {{edJob}}
        </div>
    </div>
    <button class="btn btn-success m-2" @click="sayHello">
        Hello
    </button>
    <button class="btn btn-danger m-2" @click="sayBye">
        Bye
    </button>
</template>

<script>
import SinglePostComponent from "@/components/SinglePostComponent.vue";
export default {
    name: "PostComponent",

    data() {
      return {
          name: 'Ed',
          age: 15,
          isWorker: false
      }
    },

    methods: {
        sayHello() {
            console.log('Hello World');
        },
        sayBye() {
            console.log('Goodbye World');
        }
    },

    computed: {
        edJob() {
            return this.name + ' isn\'t a worker'
        }
    },

    components: {
        SinglePostComponent
    }
}
</script>

<style scoped>

</style>
