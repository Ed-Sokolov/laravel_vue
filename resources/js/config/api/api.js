import axios from "axios";
import router from "@/router.js";

const setTokenInConfig = config => {
    const token = localStorage.getItem('access_token')

    if (token) {
        config.headers = {
            'authorization': `Bearer ${token}`
        }
    }

    return config
}

const api = axios.create();

// start request

api.interceptors.request.use(config => {
    return setTokenInConfig(config)
}, error => {
})

// end request

// start response

api.interceptors.response.use(config => {
    return setTokenInConfig(config)
}, error => {
    if (error.response.status === 401) {
        return router.push({ name: 'auth.login'})
    }
})

// end response

export default api
