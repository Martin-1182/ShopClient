export const state = () => ({
  categories: []
})
export const getters = {
 categories(state) {
    return state.categories
  }
}
export const mutations = {
  SET_CATEGORIES (state, categories) {
    state.categories = categories
  }
}
export const actions = {
  async nuxtServerInit ({ commit }, { $axios }) {
    const { data } = await $axios.$get('/categories')
    commit('SET_CATEGORIES', data)
  }
}

