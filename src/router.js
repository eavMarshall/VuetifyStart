import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    base: '/',
    routes: [
        {
            path: '/app', component: () => import("@root/pages/RouterRoot"),
            children: [
                { path: 'page1', component: () => import("@appPages/Page1") },
                { path: 'page2', component: () => import("@appPages/Page2") },
                { path: 'page3', component: () => import("@appPages/Page3") },
                { path: 'page4', component: () => import("@appPages/Page4") },
                { path: 'page5', component: () => import("@appPages/Page5") },
                { path: 'page6', component: () => import("@appPages/Page6") },
                { path: 'settings', component: () => import("@appPages/Settings") },
            ]
        },
        { path: '*', redirect: '/app/page1' },
    ],
});

export default router;
