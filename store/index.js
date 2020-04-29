import Vue from 'vue'
import Vuex from 'vuex'

import postsModule from './modules/posts'
import authModule from './modules/auth'

const debug = process.env.NODE_ENV !== "production";

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    postsModule,
    authModule
  },
  strict: debug
})

function saveToken(token, cb) {
	localStorage.setItem('token', token)

	// user is auth ^_^
	cb('AuthUser')
}