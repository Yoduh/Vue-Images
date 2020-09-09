import Vue from 'vue'
import VueRouter from 'vue-router';
import App from './App.vue'
import AuthHandler from './components/AuthHandler.vue';
import store from './store';

Vue.use(VueRouter);
const router = new VueRouter({
  mode: 'history', // browser router mode
  routes: [
    { path: '/oauth2/callback', component: AuthHandler }
  ]
})

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
