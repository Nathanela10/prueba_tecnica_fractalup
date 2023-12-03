import Vue from 'vue';
import Router from 'vue-router';
import Home from './pages/HomeProject.vue';
import ViewOne from './pages/ViewOne.vue';
import ViewTwo from './pages/ViewTwo.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    { path: '/home', component: Home },
    { path: '/viewOne', component: ViewOne },
    { path: '/viewTwo', component: ViewTwo },
  ],
});
