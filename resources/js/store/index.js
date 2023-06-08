import {createStore} from "vuex"
import Post from "./modules/post.js"

const store = createStore({
    modules: {
        Post
    }
})

export default store
