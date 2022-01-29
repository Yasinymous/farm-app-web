import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'

// AUTH COMPONENTS
import Auth from '../views/auth/index.vue'
import SignIn from '../views/auth/signIn.vue'
import SignUp from '../views/auth/signUp.vue'

// Main COMPONENTS
import Main from '../views/main/index.vue'
import DashBoard from '../views/main/dashboard/index.vue'
import Operation from '../views/main/operation/index.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/home',
    name: 'home',
    component: Home
  },
  {
    path: "/auth",
    name: "auth",
    component: Auth,
    children: [
      {
        path: '',
        name: 'auth-sign-in',
        component: SignIn
      },
      {
        path: '',
        name: 'auth-sign-up',
        component: SignUp
      },
    ]
  },
  {
    path: "/",
    name: "main",
    component: Main,
    children: [
      {
        path: 'dashboard',
        name: 'main-dashboard',
        component: DashBoard
      },
      {
        path: 'operation',
        name: 'main-operation',
        component: Operation
      },
    ]
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
