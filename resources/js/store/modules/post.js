import router from "@/router.js";

const state = {
    posts: null,
    post: {
        title: '',
        text: ''
    }
}

const getters = {
    posts: state => state.posts,
    post: state => state.post,
    isDisabled: state => state.post.title.trim() === '' || state.post.text.trim() === ''
}

const actions = {
    getPosts({commit}) {
        axios.get('/api/posts')
            .then(response => commit('setPosts', response.data.data))
    },

    getPost({commit}, id) {
        axios.get(`/api/posts/${id}`)
            .then(response => commit('setPost', response.data.data))
    },

    storePost({}, data) {
        let {title, text} = data;
        axios.post('/api/posts', {title, text})
            .then(response => router.push({name: 'posts.index'}))
    },

    updatePost({}, data) {
        let {id, title, text} = data;
        axios.patch(`/api/posts/${id}`, {title, text})
            .then(response => router.push({name: 'posts.show', params: {id}}))
    },

    destroyPost({}, id) {
        axios.delete(`/api/posts/${id}`)
            .then(response => router.push({name: 'posts.index'}))
    }
}

const mutations = {
    setPosts(state, posts) {
        state.posts = posts;
    },

    setPost(state, post) {
        state.post = post;
    }
}

export default {
    state, getters, actions, mutations
}
