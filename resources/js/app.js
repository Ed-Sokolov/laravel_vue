import './bootstrap';
import {createApp} from 'vue';
import Vue3Editor from "vue3-editor";
import router from "@/router.js";
import Index from "@/components/Index.vue";
import store from "@/store";

const app = createApp({
    el: '#app',
    components: {
        Index
    }
});

app.use(router);
app.use(store);

// app.component('post-component', PostComponent);

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// Object.entries(import.meta.glob('./**/*.vue', { eager: true })).forEach(([path, definition]) => {
//     app.component(path.split('/').pop().replace(/\.\w+$/, ''), definition.default);
// });

app.mount('#app');
