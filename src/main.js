import 'material-design-icons-iconfont/dist/material-design-icons.css' // Ensure you are using css-loader
import '@fortawesome/fontawesome-free/css/all.css' // font awesome 5
import 'font-awesome/css/font-awesome.min.css' // font awesome 4
import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import VueResource from 'vue-resource';
import VueRouter from 'vue-router';
import Routes from './routes.js';

Vue.use(VueResource);
Vue.use({iconfont:'md'});
Vue.use(VueRouter);
const router = new VueRouter({
	routes: Routes,
	mode: 'history',
});
// Vue.use({iconfont:'fa'}); //font awesome 5
// Vue.use({iconfont:'fa4'}); //font awesome 4

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router: router,
}).$mount('#app')
