export const state = () => ({
    _token: ""
})

export const getters = {
    token(state) {
        return state._token
    }
}

export const mutations = {
    setToken(state, payload) {
        state._token = 'Bearer: ' + payload
    }
}

export const actions = {
    alertSuccess({ dispatch }, message) {
        dispatch("alert/alert", {
            message: message,
            type: "success",
            duration: 5000,
        }, { root: true });
    },

    alertWarning({ dispatch }, message) {
        dispatch("alert/alert", {
            message: message,
            type: "warning",
            duration: 5000,
        }, { root: true });
    },

    post({ rootState }, payload) {
        let token = rootState.common._token
        return this.$axios.$post(payload.endpoint, payload.data, {
            headers: {
                Authorization: token
            }
        })
    },

    get({ rootState }, payload) {
        let token = rootState.common._token
        return this.$axios.$get(payload.endpoint, { headers: { Authorization: token } })
    },

    put({ rootState }, payload) {
        let token = rootState.common._token

        return this.$axios.$put(payload.endpoint, payload.data, {
            headers: {
                Authorization: token
            }
        })

    },

    delete({ rootState }, payload) {
        let token = rootState.common._token
        return this.$axios.$delete(payload.endpoint)
    }
}