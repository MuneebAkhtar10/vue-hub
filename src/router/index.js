import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "login",
    component: () => import("../views/Login.vue"),
  },
  {
    path: "/dashboard",
    name: "dashboard",
    component: () => import("../views/dashboard.vue"),
  },
  {
    path: "/home",
    name: "home",
    component: () => import("../views/home.vue"),
  },
  {
    path: "/form",
    name: "form",
    component: () => import("../views/form.vue"),
  },
  {
    path: "/profile",
    name: "profile",
    component: () => import("../views/profile.vue"),
  },
  {
    path: "/tabs",
    name: "tabs",
    component: () => import("../views/tabs.vue"),
  },
  {
    path: "/signature",
    name: "signature",
    component: () => import("../views/signature.vue"),
  },
  {
    path: "/users",
    name: "users",
    component: () => import("../views/users.vue"),
  },
  {
    path: "/liveEvent",
    name: "liveEvent",
    component: () => import("../views/liveEvent.vue"),
  },
  {
    path: "/visit",
    name: "visit",
    component: () => import("../views/visit.vue"),
  },
  {
    path: "/event",
    name: "event",
    component: () => import("../views/events.vue"),
  },
  {
    path: "/calendar",
    name: "calendar",
    component: () => import("../views/calendar.vue"),
  },
  {
    path: "/simple",
    name: "simple",
    component: () => import("../views/simple.vue"),
  },
  {
    path: "/timeline",
    name: "newResourceTimeline",
    component: () => import("../views/newResourceTimeline.vue"),
  },
  {
    path: "/popup",
    name: "allocateNewClientPopup",
    component: () => import("../views/allocateNewClientPopup.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
