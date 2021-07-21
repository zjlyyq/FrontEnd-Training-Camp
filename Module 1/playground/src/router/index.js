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
    },
    {
        path: '/templateEngine2',
        name: 'templateEngine2',
        component: () => import(/* webpackChunkName: "templateEngine" */ '../views/TemplateEngine2.vue')
    }
];

const router = new VueRouter({
    routes
})

export default router;