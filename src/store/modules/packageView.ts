import { Module } from 'vuex';
import API from '../../api';
import { RootState, PackageViewState } from '../types/types';

const packageView: Module<PackageViewState, RootState> = {
  namespaced: true,
  state: () => ({
    loaded: false,
    error: false,
    name: '',
    description: '',
    keywords: [],
    version: '',
    links: {
      npm: '',
      repository: '',
    },
  }),
  mutations: {
    successLoadingPackage(state, payload) {
      state.name = payload.name;
      state.description = payload.description;
      state.version = payload.version;
      state.keywords = payload.keywords;
      state.links.npm = payload.links.npm;
      state.links.repository = payload.links.repository;
      state.loaded = true;
    },
    errorLoadingPackage(state) {
      state.error = true;
      state.loaded = true;
    },
    startLoadingPackage(state) {
      state.loaded = false;
    },
  },
  actions: {
    loadPackage({ commit }, name) {
      commit('startLoadingPackage');
      API.getPackage(name)
        .then((response) => {
          commit('successLoadingPackage', response.collected.metadata);
        })
        .catch(() => {
          commit('errorLoadingPackage');
        });
    },
  },
};

export default packageView;
