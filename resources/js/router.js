import { createRouter, createWebHistory } from 'vue-router';
import PostComponent from "@/components/Post/PostComponent.vue";
import TagComponent from "@/components/Tag/TagComponent.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/posts',
            component: PostComponent
        },
        {
            path: '/tags',
            component: TagComponent
        }
    ]
});

export default router;
