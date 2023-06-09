import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
          path: '/',
          component: () => import("./components/Main/Index.vue"),
          name: 'main.index'
        },
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
        {
            path: '/posts/:id',
            component: () => import("./components/Post/Show.vue"),
            name: 'posts.show'
        },
        {
            path: '/posts/:id/edit',
            component: () => import("./components/Post/Edit.vue"),
            name: 'posts.edit'
        },
        {
            path: '/auth/login',
            component: () => import("./components/Auth/Login.vue"),
            name: 'auth.login'
        },
        {
            path: '/auth/registration',
            component: () => import("./components/Auth/Registration.vue"),
            name: 'auth.registration'
        }
    ]
});

export default router;
