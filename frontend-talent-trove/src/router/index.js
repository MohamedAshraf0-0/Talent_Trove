import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Dashboard from '../views/Dashboard.vue'
import Login from "../views/Login.vue"
import Portfolios from "../views/Portfolios.vue"
import Projects from "../views/Projects.vue"
import Resgister from "../views/Register.vue"

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path : '/dashboard',
    name : 'dashboard',
    component : Dashboard
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/portfolios',
    name: 'portfolios',
    component: Portfolios
  },
  {
    path: '/projects',
    name: 'projects',
    component: Projects
  },
  {
    path: '/register',
    name: 'register',
    component: Resgister
  }
]

const router = createRouter({
  mode: 'history',
  history: createWebHistory(),
  routes
})

export default router
