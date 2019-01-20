//@ts-check

import Vue from "vue";
//@ts-ignore
import Profile from "./components/Profile.vue";
//@ts-ignore
import Acceuil from "./components/Acceuil.vue";
//@ts-ignore
import Users from "./components/Users.vue";

import VueRouter from "vue-router";

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      path: "/profile",
      component: Profile
    },
    {
      path: "/",
      component: Acceuil
    },
    {
      path: "/Users",
      component: Users
    }
  ]
});
