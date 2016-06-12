import Vue from 'vue';
import Vuex from 'vuex';

import App from './components/App.vue';

Vue.use(Vuex);

const entry = e => {
  new Vue(App).$mount('#app');
};

document.addEventListener('DOMContentLoaded', entry);
