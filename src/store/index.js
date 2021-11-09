import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  namespace: true,
  state: {
    items: [],
    history: [],
  },
  getters: {
    items: (state) => state.items,
    history: (state) => state.history,
  },
  mutations: {
    updateItems: (state, items) => {
      state.items = items;
    },
    appendHistory: (state, history) => {
      state.history.push(history);
    },
  },
  actions: {
    async getItems({ commit }, search) {
      console.log(search);
      let response = await axios
        .get(`http://hn.algolia.com/api/v1/search?query={${search}}}`)
        .then((response) => {
          return Promise.resolve(response);
        })
        .catch((error) => {
          return Promise.resolve(error);
        });

      console.log(response);
      if (response.data) {
        commit("updateItems", response.data.hits);
      } else {
        commit("updateItems", ["No items found"]);
      }
    },
  },
});
