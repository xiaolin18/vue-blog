import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default function createRouter(arr) {
  console.log('arr is: ', arr);
  const router = new Router({
    mode: 'history',
    routes: arr
  });
  return router;
}
