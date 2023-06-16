import api from "@/config/api/api.js";
import router from "@/router.js";

const state = {
    authToken: null
}

const getters = {
    authToken: state => state.authToken
}

const actions = {
    async logIn({commit}, data) {
        return await axios.post('/api/auth/login', data)
            .then(response => {
                const token = response.data.access_token

                localStorage.setItem('access_token', token)

                commit('setAuthToken', token)

                router.push({name: 'main.index'})
            })
    },

    async logUp({commit}, data) {
        return await axios.post('/api/auth/register', data)
            .then(response => {
                if (response.status === 200) {
                    const token = response.data.access_token

                    localStorage.setItem('access_token', token)

                    commit('setAuthToken', token)

                    router.push({name: 'main.index'})
                }
            })
    },

    logOut({commit}) {
        api.post('/api/auth/logout')
            .then(response => {
                localStorage.removeItem('access_token')

                commit('removeAuthToken')

                router.push({name: 'auth.login'})
            })
    }
}

const mutations = {
    setAuthToken(state, data) {
        state.authToken = data
    },

    removeAuthToken(state) {
        state.authToken = null
    }
}

export default {
    state, getters, actions, mutations
}
