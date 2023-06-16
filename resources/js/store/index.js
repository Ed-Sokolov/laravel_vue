import {createStore} from "vuex"
import Post from "./modules/post.js"
import Login from "./modules/login.js"

const store = createStore({
    modules: {
        Post,
        Login
    }
})

export default store
