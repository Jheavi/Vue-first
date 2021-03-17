import axios from 'axios'

export async function getAllPosts (context: any) {
  const { data } = await axios.get(context.state.endpoint)
  context.commit('setPosts', data)
}

export async function getPost (context: any, id: number) {
  const { data } = await axios.get(`${context.state.endpoint}${id}`)
  context.commit('setPost', data)
}
