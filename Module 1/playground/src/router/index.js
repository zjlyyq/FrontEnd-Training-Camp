import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'

Vue.use(VueRouter);
const routes = [
    {
        path: '/',
        name: '/',
        component: Home
    },
    {
        path: '/templateEngine',
        name: 'templateEngine',
        component: () => import(/* webpackChunkName: "templateEngine" */ '../views/TemplateEngine.vue')
    }
];

const router = new VueRouter({
    routes
})

export default router;