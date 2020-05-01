<template>
  <div class="home">
    <AddPost v-on:add-post="addPost"/>
    <PostList v-on:del-post="delPost" v-bind:posts="posts"/>
  </div>
</template>

<script>
import axios from "axios"
// @ is an alias to /src
import AddPost from '../views/AddPost'
import PostList from '../views/PostList'
 
export default {
  name: 'Home',
  components: {
    AddPost,
    PostList,
  }, 
  data(){
    return{
      posts: []
    }
  },
  methods: {
    addPost(newPost){
      const{title, body} = newPost;
      axios.post("https://jsonplaceholder.typicode.com/posts",{
        title,
        body
      })
      .then(res => this.posts=[...this.posts, res.data])
      .catch(err => console.log(err))

  },
  delPost(id){
   this.posts = this.posts.filter(posts => posts.id !== id);
  }

  },
  created(){
    axios.get(`https://jsonplaceholder.typicode.com/posts?_limit=5`)
    .then(res => {
      this.posts =res.data
    })
    .catch(err => console.log(err))
  }
};
</script>
