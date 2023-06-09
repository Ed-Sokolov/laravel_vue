<template>
    <div class="row justify-content-center">
        <div class="card w-75">
            <div class="card-body">
                <h5 class="card-title text-center">Sign Up</h5>
                <form>
                    <div class="form-group">
                        <label for="name">Your name</label>
                        <input type="text" v-model="name" class="form-control" id="name" placeholder="Enter name">
                    </div>
                    <div class="form-group">
                        <label for="email">Email address</label>
                        <input type="email" v-model="email" class="form-control" id="email" placeholder="Enter email">
                    </div>
                    <div class="form-group">
                        <label for="password">Password</label>
                        <input type="password" v-model="password" class="form-control" id="password"
                               placeholder="Password">
                    </div>
                    <div class="form-group">
                        <label for="password-confirm">Confirm password</label>
                        <input type="password" v-model="password_confirm" class="form-control" id="password-confirm"
                               placeholder="Confirm your password">
                    </div>
                    <button @click.prevent="register" type="submit" class="btn btn-primary">Sign Up</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Registration",

    data() {
        return {
            name: '',
            email: '',
            password: '',
            password_confirm: ''
        }
    },

    methods: {
        register() {
            let {name, email, password, password_confirm} = this;

            axios.post('/api/auth/register', {name, email, password, password_confirm})
                .then(response => this.$router.push({name: 'auth.login'}))
        }
    }
}
</script>

<style scoped>

</style>
