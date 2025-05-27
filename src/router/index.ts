import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'

const routes = [
  { path: '/', component: Home, meta: { requiresAuth: true }},
  { path: '/login', component: Login }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach((to, _, next) => {
  const isAuth = !!localStorage.getItem('token')
  if (to.meta.requiresAuth && !isAuth) {
    next('/login')
  } else {
    next()
  }
})

export { router }
