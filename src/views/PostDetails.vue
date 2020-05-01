<template>
    <div class="post_details">
        <div class="row mb-3">
            <div class="col-auto">
                <router-link class="btn btn-block btn-info" to='/'>Go Back</router-link>
            </div>
        </div>
       <div class="card bg-dark mb-2">
           <div class="card-body">
               <h3>{{ post.title}}</h3>
               <p>{{ post.body}}</p>
           </div>
       </div>
       <PostComment/>
    </div>
</template>
<script>
import axios from "axios"
import PostComment from '../views/PostComment'

export default {
    name: "PostDetails",
    components: {
        PostComment
    },
    data(){
        return{
            id: this.$route.params.id,
            post:[]
        }
    },
      created(){
    axios.get(`https://jsonplaceholder.typicode.com/posts/${this.id}`)
    .then(res => {
      this.post =res.data
    })
    .catch(err => console.log(err))
  }
}
</script>

<style scoped>

</style>