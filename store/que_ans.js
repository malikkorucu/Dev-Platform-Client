export const state = () => ({
    _questions: [],
    _singleQuestion: {},
    _answers: []
})

export const getters = {
    questions(state) { return state._questions },
    singleQuestion(state) { return state._singleQuestion },
    answers(state) { return state._answers }
}

export const mutations = {
    setQuestions(state, payload) {
        state._questions = payload
    },
    setSingleQuestion(state, payload) {
        state._singleQuestion = payload
    },
    setAnswers(state, payload) {
        state._answers = payload
    },
    addQuestionToArray(state, payload) {
        state._questions.unshift(payload)
    },
    addAnswerToArray(state, payload) {
        state._answers.push(payload)
    }
}

export const actions = {
    addNewQuestion({ dispatch, commit }, payload) {
        dispatch('common/post', {
            endpoint: 'question/new',
            data: payload
        }, { root: true }).then(res => {
            commit('addQuestionToArray', res.data)
            dispatch("common/alertSuccess", 'Soru başarıyla eklendi', { root: true })
        })
    },

    getQuestions({ dispatch, commit }) {
        return dispatch('common/get', {
            endpoint: 'question/questions'
        }, { root: true }).then(res => {
            console.log(res)
            commit('setQuestions', res.data.reverse())
        })
    },

    getAllQuestions({ dispatch, commit }) {
        return dispatch('common/get', {
            endpoint: 'question/questions/all'
        }, { root: true }).then(res => {
            commit('setQuestions', res.data)
        })
    },

    getSingleQuestion({ dispatch, commit, getters }, payload) {
        const { slug, shortId } = payload

        return dispatch('common/get', {
            endpoint: `question/get/${slug}/${shortId}`
        }, { root: true })
            .then(res => {
                commit('setSingleQuestion', res.data.question)
            })
            .catch(err => console.log(err))
    },

    addAnswer({ dispatch, commit }, payload) {
        return dispatch('common/post', {
            endpoint: 'answer/new',
            data: payload
        }, { root: true }).then(res => {
            console.log(res)
            dispatch("common/alertSuccess", 'Cevap başarıyla eklendi', { root: true })
            commit('addAnswerToArray', res.data)
        })
    },

    getAnswersOfQuestion({ dispatch, commit,getters },payload) {
        const {slug , shortId} = payload
        
        return dispatch('common/get', {
            endpoint: `answer/question/${slug}/${shortId}`
        }, { root: true }).then(res => {
            commit('setAnswers', res.data)
        })
    }
}