import Vue from 'vue';
import Vuex from 'vuex';

import search from './modules/search';
import packageView from './modules/packageView';

import { RootState } from './types/types';

Vue.use(Vuex);

export default new Vuex.Store<RootState>({
  modules: {
    search,
    packageView,
  },
});
