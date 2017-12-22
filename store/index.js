import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      results: []
    },
    mutations: {
      addMusic(state, payload) {
        state.results = payload;
      }
    }
  })
}

export default createStore;
