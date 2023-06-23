import './bootstrap';
import {createApp} from 'vue';
import router from "@/router.js";
import Index from "@/components/Index.vue";
import store from "@/store";

import AOS from 'aos'
import 'aos/dist/aos.css';

const app = createApp({
    components: {
        Index
    },
    created() {
        AOS.init({
            duration: 1000
        })
    }
});

app.use(router);
app.use(store);

app.mount('#app');
