import Vue from 'vue';
import Router from 'vue-router';
import Projects from './views/Projects.vue';
import Register from './views/Register.vue';
import Login from './views/Login.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'projects',
      component: Projects,
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
    {
      path: '/register',
      name: 'register',
      component: Register,
    },
  ],
});
