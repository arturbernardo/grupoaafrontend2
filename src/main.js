import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import Router from 'vue-router'
import Edit from './components/Edit.vue'
import List from './components/List.vue'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name:'list',
      component: List,
    },
    {
      path: '/student/:id',
      name:'edit',
      component: Edit
    },
    {
      path: '/add',
      name:'create',
      component: List,
    },
  ]
})

new Vue({
  vuetify,
  router,
  render: h => h(App),
}).$mount('#app')
