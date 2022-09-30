import { createStore } from "vuex";
import productModule from './products'

export default createStore({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    products: productModule
  },
});
