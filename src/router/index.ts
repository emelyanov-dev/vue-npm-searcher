import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Search from '../views/Search.vue';
import Package from '../views/Package.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Search',
    component: Search,
  },
  {
    path: '/package/:packageName',
    name: 'Package',
    component: Package,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
