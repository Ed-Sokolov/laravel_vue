import './bootstrap';
import { createApp } from 'vue';
import PostComponent from "@/components/PostComponent.vue";

const app = createApp({
    el: '#app',

    components: {
        PostComponent
    }
});

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
