<template>
    <div class="row justify-content-center">
        <div class="card w-75">
            <div class="card-body">
                <h5 class="card-title text-center">Sign In</h5>
                <form>
                    <div class="form-group">
                        <label for="email">Email address</label>
                        <input type="email" v-model="email" class="form-control" id="email" placeholder="Enter email">
                    </div>
                    <div class="form-group">
                        <label for="password">Password</label>
                        <input type="password" v-model="password" class="form-control" id="password" placeholder="Password">
                    </div>
                    <button @click.prevent="login" type="submit" class="btn btn-primary">Sign In</button>
                    <div v-if="error" class="alert alert-danger mt-3" role="alert">
                        {{ error }}
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Login",

    data() {
        return {
            email: '',
            password: '',
            error: null
        }
    },

    methods: {
        login() {
            let {email, password} = this;

            this.$store.dispatch('logIn', {email, password})
                .catch(error => {
                    this.error = error.response.data.error
                })
        }
    }
}
</script>

<style scoped>

</style>
