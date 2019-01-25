import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';
import Fetcher from './lib/fetch';

Vue.config.productionTip = false;
declare global {
	interface Vue {
		$api: Fetcher;
	}
}
Vue.prototype.$api = new Fetcher({ basePath: 'https://beta.checkvist.com/' });

router.beforeEach( (to, from, next) => {
	if (to.matched.some( record => record.meta.auth )) {
		if (localStorage.getItem('token') == null) {
			next ({
				path: '/',
				params: { nextUrl: to.fullPath}
			});
		} else {
			next();
		}
	} else {
		next();
	};
});

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
