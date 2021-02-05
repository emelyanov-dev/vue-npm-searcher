import { Module } from 'vuex';
import { SearchState, RootState } from '@/store/types/types';
import API from '../../api';

let searchTimer: ReturnType<typeof setTimeout> | undefined;

const search: Module<SearchState, RootState> = {
  namespaced: true,
  state: () => ({
    init: true,
    loading: false,
    query: '',
    results: [],
    total: 0,
  }),
  mutations: {
    startLoading(state) {
      state.loading = true;
      state.init = false;
    },
    loadPackages(state, payload) {
      state.results = payload.packages;
      state.total = payload.total;
      state.loading = false;
    },
    setQuery(state, query: string) {
      state.query = query;
    },
  },
  actions: {
    search({ commit }, { query, page }) {
      commit('startLoading');
      clearTimeout(searchTimer);
      searchTimer = setTimeout(() => {
        API.searchPackages(query, page).then((payload) => {
          commit('loadPackages', payload);
          commit('setQuery', query);
        });
      }, 300);
    },
  },
};

export default search;
