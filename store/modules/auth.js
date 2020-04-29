


export default {
    namespaced: true,
	state: {
		authenticated: false,
		authError: null
	},
	mutations: {
		AuthUser(state) {4
			state.authenticated = true
			state.authError = null
		},
		AuthError(state, e) {
			state.authError = e
		}
	},
	actions: {
		signin({ commit }, { email, password }) {
			axios
				.post('/auth/signin', {
					email,
					password
				})
				.then(res => saveToken(res.data.token, commit))
				.catch(({ response }) => {
					commit('AuthError', response.data)
				})
		},
		signup({ commit }, { email, password }) {
			axios
				.post('/auth/signup', {
					email,
					password
				})
				.then(res => saveToken(res.data.token, commit))
				.catch(({ response }) => {
					commit('AuthError', response.data)
				})
		}
	}
}