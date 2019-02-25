import Vue from "vue";
import Router from "vue-router";
import Auth from "./views/Auth.vue";
import List from "./views/List.vue";
import Tasks from "./views/Tasks.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "login",
      component: Auth
    },
    {
      path: "/list",
      name: "list",
      component: List,
      meta: { auth: true }
    },
    {
      path: "/tasks/:id",
      name: "tasks",
      component: Tasks,
      meta: { auth: true },
      props: true
    }
  ]
});
