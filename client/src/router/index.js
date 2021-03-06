import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/shop',
    name: 'Shop',
    component: () => import(/* webpackChunkName: "about" */ '../views/Shop')
  },
  {
    path: '/find_job',
    name: 'FindJob',
    component: () => import('../views/FindJob')
  },
  {
    path: '/find_teacher',
    name: 'FindTeacher',
    component: () => import('../views/FindTeacher')
  },
  {
    path: '/blog',
    name: 'Blog',
    component: () => import('../views/Blog')
  },
  {
    path: '/resource',
    name: 'Resource',
    component: () => import('../views/Resource')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login')
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('../views/Register')
  },
  {
    path: '/profile/edit',
    name: 'EditProfile',
    component: () => import('../views/EditProfile')
  },
  {
    path: '/product/:id',
    name: 'Product',
    component: () => import('../views/Product')
  },
  {
    path: '/paid',
    name: 'Paid',
    component: () => import('../views/Paid')
  },
  {
    path: 'case_form',
    name: 'CaseForm',
    component: () => import('../views/CaseForm')
  }
]

const router = new VueRouter({
  routes
})

export default router
