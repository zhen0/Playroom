import Vue from "vue";

Vue.config.productionTip = false;
import VueRouter from "vue-router";
import App from "./App.vue";
import Flash from "./components/Flash.vue";
import Drag from "./components/Drag.vue";
import Phonics from "./components/Phonics";
import Match from "./components/Match.vue";
import Card from "./components/Card.vue";
import PictureCard from "./components/PictureCard.vue";

Vue.use(VueRouter);

const routes = [
  { path: "/info", component: Flash },
  { path: "/join", component: Drag },
  { path: "/home", component: Phonics },
  { path: "/app", component: App },
  { path: "/rentals", component: Match },
  { path: "/classes", component: Card },
  {
    path: "/faq",
    component: PictureCard
  }
];

const router = new VueRouter({
  routes // short for `routes: routes`
});

export const app = new Vue({
  el: "#app",
  router,
  render: h => h(App)
});
