import axios from "axios";
import router from "@/router.js";

const getToken = (name = 'access_token') => localStorage.getItem(name)

const setTokenInConfig = config => {
    const token = getToken()

    if (token) {
        config.headers.authorization = `Bearer ${token}`
    }

    return config
}

const api = axios.create();

// start request

api.interceptors.request.use(config => setTokenInConfig(config), error => {
})

// end request

// start response

api.interceptors.response.use(config => setTokenInConfig(config), error => {
    if (error.response.data.message === 'Token has expired') {
        return axios.post('api/auth/refresh', {}, {
            headers: {
                'authorization': `Bearer ${getToken()}`
            }
        })
            .then(response => {
                localStorage.setItem('access_token', response.data.access_token)

                error.config = setTokenInConfig(error.config)

                return api.request(error.config)
            })
    }
    if (error.response.status === 401) {
        return router.push({ name: 'auth.login'})
    }
})

// end response

export default api
