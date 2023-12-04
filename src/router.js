import Vue from 'vue';
import Router from 'vue-router';
import Home from './pages/HomeProject/HomeProject.vue';
import ViewOne from './pages/ViewOne.vue';
import ViewTwo from './pages/ViewTwo.vue';
import NotFound from './pages/NotFound/NotFound.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', redirect: '/home' },
    { path: '/home', component: Home },
    { path: '/viewOne', component: ViewOne },
    { path: '/viewTwo', component: ViewTwo },
    { path: '*', component: NotFound}
  ],
});
