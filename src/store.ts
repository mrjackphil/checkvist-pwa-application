import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    editTask: 0
  },
  mutations: {
    editTask(state, id: number) {
      state.editTask = id;
    }
  },
  actions: {}
});
