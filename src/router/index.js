// Composables
import cookies from "vue-cookies";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/registration",
    name: "Register",
    component: () => import("@/views/register/RegisterPage.vue"),
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("@/views/auth/LoginPage.vue"),
  },

  {
    path: "/",
    name: "Dashboard",
    component: () => import("@/views/dashboard/DashboardPage.vue"),
    meta: {
      needAuth: true,
    },
  },
  {
    path: "/employee-stats",
    name: "EmployeeStats",
    component: () => import("@/views/employee-stats/EmployeeStatsPage.vue"),
    meta: {
      needAuth: true,
    },
  },

  {
    path: "/*",
    name: "NotFound",
    redirect: "/registration",
    // component: () => import("@/views/404.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  const isUserValid = cookies.get("userToken");
  const users = cookies.get("users");

  console.log(JSON.parse(JSON.stringify(users)));
  console.log(JSON.parse(JSON.stringify(isUserValid)));

  if (!users) {
    router.replace({ name: "Register" });
  }

  // Im just using simple logic auth, not comparing user data from cookie "users"
  if (to.meta.needAuth && !isUserValid) {
    router.replace({ name: "Login" });
  }

  return next();
});

export default router;
