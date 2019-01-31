import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';
import Fetcher from './lib/api';
import cookie from 'js-cookie';
// @ts-ignore
import VueFlashMessage from 'vue-flash-message';

Vue.use(VueFlashMessage, {
  messageOptions: {
    timeout: 3000,
  }
});

Vue.config.productionTip = false;

Vue.prototype.$api = new Fetcher();
Vue.directive('focus', {
  inserted: (el) => {
    el.focus()
  }
})

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.auth)) {
    if (cookie.get('token') == null) {
      next({
        path: '/'
      });
    } else {
      next();
    }
  } else {
    next();
  }
});

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app');
