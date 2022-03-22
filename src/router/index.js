import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Events from "@/views/Events";
import Users from "@/views/Users";
import Connection from "@/views/Connection";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/events',
    name: 'events',
    component: Events
  },
  {
    path: '/users',
    name: 'users',
    component: Users
  },
  {
    path: '/connection',
    name: 'connection',
    component: Connection
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
