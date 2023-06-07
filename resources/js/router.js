import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/posts',
            component: () => import("./components/Post/Index.vue"),
            name: 'posts.index'
        },
        {
            path: '/posts/create',
            component: () => import("./components/Post/Create.vue"),
            name: 'posts.create'
        },
    ]
});

export default router;
