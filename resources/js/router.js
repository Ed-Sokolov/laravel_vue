import { createRouter, createWebHistory } from 'vue-router';
import {getToken} from "@/config/api/api.js";

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
        },
        {
            path: '/personal/index',
            component: () => import("./components/Personal/Index.vue"),
            name: 'personal.index'
        },
        {
            path: '/:catchAll(.*)',
            component: () => import("./components/Main/Index.vue"),
            name: '404'
        }
    ]
});

router.beforeEach((to, from, next) => {
    const token = getToken()

    if (to.name !== 'auth.login' && to.name !== 'auth.registration') {
        if (!token) {
            return next({
                name: 'auth.login'
            })
        }
    }

    if (to.name === 'auth.login' || to.name === 'auth.registration') {
        if (token) {
            return next({
                name: 'main.index'
            })
        }
    }

    next()
})

export default router;
