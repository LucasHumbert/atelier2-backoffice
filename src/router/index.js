import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Events from "@/views/Events";
import Users from "@/views/Users";
import Connection from "@/views/Connection";
import ErrorView from "@/views/ErrorView";
import userProfil from "@/views/UserProfil";
import UserProfil from "@/views/UserProfil";

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
    path: '/users/:id',
    name: 'userProfil',
    component: UserProfil
  },
  {
    path: '/connection',
    name: 'connection',
    component: Connection
  },
  {
    path: '/error',
    name: 'error',
    component: ErrorView
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
