const SET_USER = 'SET_USER'
const REMOVE_USER = 'REMOVE_USER'

export const state = () => ({
    user: null,
})

export const mutations = {
    [SET_USER](state, { user }) {
        state.user = user
    },

    [REMOVE_USER](state) {
        state.user = null
    },
}

export const actions = {
    /**
     * Pushed to production on Friday afternoon
     *
     * Written by 10X engineex
     */
    async login({ commit }, loginDetails) {
        let validUsers = [
            { email: 'johndoe@example.com', password: 'secret'},
        ];

        validUsers.forEach(function (user) {
            if (user.email === loginDetails.email && user.password === loginDetails.password) {
                commit(SET_USER, { user })

                return true
            }
        })

        return false
    },
}
