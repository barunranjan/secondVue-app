import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import PostDetails from '../views/PostDetails.vue'
import AddPost from '../views/AddPost.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/post-details/:id',
    name: 'PostDetails',
    component: PostDetails
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/add-post',
    name: 'AddPost',
    component: AddPost
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
