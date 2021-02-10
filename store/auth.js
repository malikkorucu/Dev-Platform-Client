export const state = () => ({
    _signedInUser: null
})

export const getters = {
    signedInUser(state) {
        return state._signedInUser
    },
}

export const mutations = {
    setSignedInUser(state, payload) {
        state._signedInUser = payload
    },
}

export const actions = {
    initToken({ commit }, payload) {
        commit('common/setToken', payload, { root: true })
    },
    initAuth({ commit }) {
        const user = JSON.parse(localStorage.getItem('dev_user'))
        if (user) {
            commit('setSignedInUser', user)
        }
    },
    signOut({ commit }) {
        console.log(this.$cookies)
        this.$cookies.remove('dev_token')
        localStorage.removeItem('dev_user')
        this.$router.push({ name: 'auth-login' })
    },
    async signUpUser({ dispatch }, registerData) {
        this.$axios.$post('auth/register', registerData)
            .then(res => {
                if (res.success) {
                    this.$cookies.set('dev_token', res.token)
                    this.$router.push('/auth/login')
                    dispatch('post')
                    dispatch("common/alertSuccess", "Kayıt işlemi başarılı", { root: true })
                } else {
                    dispatch("common/alertSuccess", res.message, { root: true })
                }
            })
    },
    async signInUser({ dispatch, state, commit }, loginData) {
        dispatch('common/post', { endpoint: 'auth/login', data: loginData }, { root: true })
            .then(res => {
                if (res.success) {
                    this.$cookies.set('dev_token', res.token)
                    console.log(res)
                    dispatch('common/alertSuccess', `Hoşgeldin ${res.data.name} ${res.data.surname}`, { root: true })
                    this.$router.replace({ name: 'index' })
                    commit('setSignedInUser', res.data)
                    localStorage.setItem('dev_user', JSON.stringify(res.data))
                } else {
                    console.log(res)
                }
            })
    },
}