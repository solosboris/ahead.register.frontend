import { createRouter, createWebHistory } from 'vue-router'
import Register from '../components/Register.vue'
import Request from '../components/Request.vue'
import Login from '../components/Login.vue'
import Error from '../components/Error.vue'
import Reject from '../components/Reject.vue'
import Logged from '../components/Logged.vue'

const routes = [
  { path: '/', redirect: '/register' },
  { path: '/register', component: Register },
  { path: '/request', component: Request },
  { path: '/login', component: Login },
  { path: '/406', component: Error },
  { path: '/401', component: Reject },
  { path: '/logged', component: Logged }
]

export default createRouter({
  history: createWebHistory(),
  routes
})