import { createStore } from 'vuex'
import * as actions from './actions/actions'

const state = {
  posts: [],
  post: {},
  postLoading: false,
  endpoint: 'https://jsonplaceholder.typicode.com/posts/'
}

const mutations = {
  setPosts (state: any, newPosts: any) {
    state.posts = newPosts
  },
  setPost (state: any, newPost: any) {
    state.post = newPost
    state.postLoading = false
  },
  loadingPost (state: any) {
    state.post = {}
    state.postLoading = true
  }
}

const modules = {}

export default createStore({
  state,
  mutations,
  actions,
  modules
})
