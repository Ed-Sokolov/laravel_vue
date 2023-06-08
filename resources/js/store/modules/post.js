const state = {
    post: null
}

const getters = {
    post: state => state.post
}

const actions = {
    getPost({commit}, id) {
        axios.get(`/api/posts/${id}`)
            .then(response => commit('setPost', response.data.data))
    },
}

const mutations = {
    setPost(state, post) {
        state.post = post;
    }
}

export default {
    state, getters, actions, mutations
}
