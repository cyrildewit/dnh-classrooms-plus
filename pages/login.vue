<template>
    <div class="p-10">
        <h1>Login page</h1>

        <form @submit.prevent="login">
            <input type="text" v-model="user.email" placeholder="E-mail" class="text-xl font-sans border-2">
            <br>
            <input type="text" v-model="user.password" placeholder="Password" class="text-xl font-sans border-2">

            <button class="bg-blue-500 px-2 py-3 rounded text-white">Login</button>
        </form>
    </div>
</template>

<script>
export default {
  layout: 'default',

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
