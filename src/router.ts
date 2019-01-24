import Vue from 'vue';
import Router from 'vue-router';
import Auth from './views/Auth.vue';
import List from './views/List.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: '',
      component: Auth,
	},
    {
      path: '/list',
      name: '',
      component: List,
    }
  ],
});
