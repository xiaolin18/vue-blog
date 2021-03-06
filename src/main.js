import Vue from 'vue';
import createRouter from './router';
import App from './App.vue';

xport default function createApp() {
  // create store and router instances
  const store = createStore();
  const router = createRouter();

  // create the app instance.
  // here we inject the router, store and ssr context to all child components,
  // making them available everywhere as `this.$router` and `this.$store`.
  const app = new Vue({
    router,
    render: h => h(App)
  });

  // expose the app, the router and the store.
  // note we are not mounting the app here, since bootstrapping will be
  // different depending on whether we are in a browser or on the server.
  return { app, router };
}
