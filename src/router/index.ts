import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";

const routes: Array<RouteRecordRaw> = [
<<<<<<< HEAD
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
=======
   {
      path: "/",
      name: "Home",
      component: Home,
   },
   {
      path: "/about",
      name: "About",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
         import(/* webpackChunkName: "about" */ "../views/About.vue"),
   },
];

const router = createRouter({
   history: createWebHistory(process.env.BASE_URL),
   routes,
>>>>>>> df2daea32a45efbdffe2cac282584d706bda0095
});

export default router;
