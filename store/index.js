export const state = () => ({
    counter: 0,
	drawer: true
  })
  
  export const mutations = {
    increment (state) {
      state.counter++
    },
	  toggleDrawer(state) {
		state.drawer = !state.drawer
	  },
	  drawer(state, val) {
		state.drawer = val
	  }
  }