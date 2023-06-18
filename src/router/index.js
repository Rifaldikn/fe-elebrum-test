// Composables
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: () => import("@/layouts/default/Default.vue"),
    redirect: "/registration",
    children: [
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
    ],
  },
  {
    path: "/*",
    name: "NotFound",
    component: () => import("@/views/404.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
