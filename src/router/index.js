import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Search from "../views/Search.vue";
import History from "../views/History.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/search",
    name: "Search",
    component: Search,
  },
  {
    path: "/history",
    name: "History",
    component: History,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
