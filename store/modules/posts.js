
import PostsService from '@/services/Posts'

/*
Assuming this Rest API:
/posts    GET     retrieves all posts
/posts/id	GET	    retrieves a single post
/posts  	POST	  creates a new post
/posts/id	PUT	    modifies a post
/posts/id	DELETE  deletes a post
*/

export default {
  namespaced: true,
  state: {},
  mutations: {},
  getters: {},
  actions: {
    fetch: context => {
      PostsService.fetchPosts()
        .then(data => console.log(data))
        .catch(error => console.error(error))
    },
    get: (context, postId) => {
      PostsService.getPost(postId)
        .then(data => console.log(data))
        .catch(error => console.error(error))
    },
    create: (context, newPost) => {
      PostsService.getPost(newPost)
        .then(response => console.log(response))
        .catch(error => console.error(error))
    },
    update: (context, updatePost) => {
      PostsService.updatePost(updatePost.id, updatePost)
        .then(response => console.log(response))
        .catch(error => console.error(error))
    },
    delete: (context, postId) => {
      PostsService.deletePost(postId)
        .then(response => console.log(response))
        .catch(error => console.error(error))
    },
  },
}