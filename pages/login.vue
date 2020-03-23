<template>
    <div class="p-10">
        <h1>Login page</h1>

        <form @submit.prevent="login">
            <input type="text" v-model="user.email" placeholder="E-mail">
            <br>
            <input type="text" v-model="user.password" placeholder="Password">

            <button>Login</button>
        </form>

    </div>
</template>

<script>
export default {
    data: () => ({
        user: {
            email: null,
            password: null,
        },
    }),

    methods: {
        login() {
            this.$store.dispatch('auth/login', this.user).then(res => {
                if (res) {
                    this.$router.push('dashboard')
                }
            }).catch(error => {
            })
        },
    },
}
</script>
