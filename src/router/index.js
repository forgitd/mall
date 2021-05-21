import Vue from 'vue'
import VueRouter from 'vue-router'


const Home = () => import("../views/tabbar/Home");
const Category = () => import("../views/tabbar/Category");
const Cart = () => import("../views/tabbar/Cart");
const Profile = () => import("../views/tabbar/Profile");

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/category',
    component: Category
  },
  {
    path: '/cart',
    component: Cart
  },
  {
    path: '/profile',
    component: Profile
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
