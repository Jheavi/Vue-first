import { Post } from '@/interfaces/store'
import { createStore } from 'vuex'
import * as actions from './actions/actions'

const state = {
  posts: [],
  post: {},
  postLoading: false,
  endpoint: 'http://localhost:2130/'
}

const mutations = {
  setPosts (state: any, newPosts: Post[]) {
    state.posts = newPosts
  },
  setPost (state: any, newPost: Post) {
    state.post = newPost
    state.postLoading = false
  },
  setNoPost (state: any) {
    state.post = {}
    state.postLoading = false
  },
  loadingPost (state: any) {
    state.post = {}
    state.postLoading = true
  },
  deletePost (state:any, postId: number) {
    state.posts = state.posts.filter((post: Post) => post.id !== postId)
  },
  createPost (state: any, post: Post) {
    state.posts = [...state.posts, post]
  }
}

const modules = {}

export default createStore({
  state,
  mutations,
  actions,
  modules
})
