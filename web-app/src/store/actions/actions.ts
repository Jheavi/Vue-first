import axios from 'axios'
import { Post } from '../../interfaces/store'

export async function getAllPosts (context: any) {
  const { data } = await axios.get(context.state.endpoint)
  context.commit('setPosts', data)
}

export async function getPost (context: any, postId: number) {
  const { data } = await axios.get(`${context.state.endpoint}${postId}`)
  if (data) {
    context.commit('setPost', data)
  } else {
    context.commit('setNoPost')
  }
}

export async function updatePost (context: any, post: Post) {
  const { data } = await axios.put(
    `${context.state.endpoint}${post.id}`,
    { postToUpdate: post }
  )
  context.commit('setPost', data)
  context.commit('updatePostinPosts', data)
}

export async function deletePost (context: any, postId: number) {
  const { status } = await axios.delete(`${context.state.endpoint}${postId}`)

  if (status === 204) {
    context.commit('deletePost', postId)
  }
}

export async function createPost (context: any, post: Post) {
  const { data } = await axios.post(context.state.endpoint, { postToCreate: post })

  if (data) {
    context.commit('createPost', data)
    context.commit('setPost', data)
  } else {
    context.commit('setNoPost')
  }
}
