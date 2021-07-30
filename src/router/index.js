import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
    {
        path: "/buttons",
        name: "Buttons",
        component: () => import('@/components/views/examples/Buttons'),
    },
    {
        path: "/inputs",
        name: "Inputs",
        component: () => import('@/components/views/examples/Inputs'),
    },
    {
        path: "/",
        name: "Dashboard",
        component: () => import('@/components/views/examples/Dashboard'),
    },
];
const router = new VueRouter({
    mode: 'history',
    // base: process.env.BASE_URL,
    routes,
    linkExactActiveClass: "active",
})

export default router