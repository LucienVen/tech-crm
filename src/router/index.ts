import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import Count from "../views/count.vue";
import Login2 from "../views/Login2.vue";
import Register from "../views/register.vue";

// 定义不需要登录就可以访问的路由
const publicRoutes = ["/login2", "/register"];

const routes = [
  { path: "/", component: Home, meta: { requiresAuth: true } },
  { path: "/login", component: Login },
  { path: "/count", component: Count, meta: { requiresAuth: true } },
  { path: "/login2", component: Login2, name: "Login2" },
  { path: "/register", component: Register, name: "Register" },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, _, next) => {
  const isAuth = !!localStorage.getItem("token");

  // 如果是需要认证的页面且未登录，重定向到登录页
  if (to.meta.requiresAuth && !isAuth) {
    next("/login2");
  }
  // 如果已登录且访问登录/注册页，重定向到首页
  else if (isAuth && publicRoutes.includes(to.path)) {
    next("/");
  } else {
    next();
  }
});

export { router };
