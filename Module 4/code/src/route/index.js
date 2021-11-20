import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  { path: "/", redirect: "/home" },
  {
    path: "/home",
    name: "home",
    component: () => import("../views/Home.vue"),
  },
  {
    path: "/defineProperty",
    name: "defineProperty",
    component: () => import("../views/DefineProperty.vue"),
  },
  {
    path: "/definePropertyArray",
    name: "definePropertyArray",
    component: () => import("../views/DefinePropertyArray.vue"),
  },
  {
    path: "/definePropertyObject",
    name: "definePropertyObject",
    component: () => import("../views/DefinePropertyObject.vue"),
  },
  {
    path: "/proxy",
    name: "proxy",
    component: () => import("../views/Proxy.vue"),
  },
  {
    path: "/proxyArray",
    name: "proxyArray",
    component: () => import("../views/ProxyArray.vue"),
  },
  {
    path: "/proxyObject",
    name: "proxyObject",
    component: () => import("../views/ProxyObject.vue"),
  },
  {
    path: "/vueTemplateCompiler",
    name: "vueTemplateCompiler",
    component: () => import("../views/VueTemplateCompiler.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes: routes,
});

export default router;
