export interface Post {
  name: string
  title: string
  id: number
  userId: number
}

interface State {
  posts: [Post],
  post: Post | null,
  postLoading: boolean,
  endpoint: string
}

interface Mutations {
  setPosts: (state:State, post:[Post]) => void
  setPost: (state: State, newPost: Post | null) => void
  loadingPost: (state: State) => void
}

interface Actions {
  getAllPosts: Function
  getPost: Function
}

export interface StoreOptions<S> {
  state: S
  mutations: Mutations
  actions: Actions
  modules: Object
}
