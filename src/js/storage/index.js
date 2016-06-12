import Vuex, { Storage } from 'vuex';

import mutations from './mutations';

const state = {
  fiterable: 'all',
  todos: []
};


export default new Store({
  state,
  mutations
});
