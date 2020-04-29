import axios from 'axios'

const URI_ENDPOINT = '/posts'

function factory(service) {
  return {
    fetchPosts() {
      service.get(URI_ENDPOINT).then(response => response.data)
    },
    getPost(id) {
      service.get(`${URI_ENDPOINT}/${id}`).then(response => response.data)
    },
    createPost(payload) {
      service.post(URI_ENDPOINT, payload)
    },
    updatePost(id, payload) {
      service.put(`${URI_ENDPOINT}/${id}`, payload)
    },
    deletePost(id) {
      service.delete(`${URI_ENDPOINT}/${id}`)
    },
  }
}

// To be consumed in tests
export const Test = { factory }

// To be consumed in app
export default factory(axios)