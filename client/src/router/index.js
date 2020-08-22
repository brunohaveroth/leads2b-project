import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import SignIn from '../views/SignIn.vue'
import SignUp from '../views/SignUp.vue'
import store from '../store/index.js'

Vue.use(VueRouter)

const authenticatedRoute = (to, from, next)=> {
  return store.getters.isAuthenticated ? next() : next('/signin');
}

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    beforeEnter: authenticatedRoute
  },
  {
    path: '/signin',
    name: 'SignIn',
    component: SignIn
  },
  {
    path: '/signup',
    name: 'SignUp',
    component: SignUp
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
