//@ts-check

import Vue from "vue";
//@ts-ignore
import Profile from "./components/Profile.vue";
//@ts-ignore
import Acceuil from "./components/Acceuil.vue";
//@ts-ignore
import Users from "./components/Users.vue";
//@ts-ignore
import Apropos from "./components/Apropos.vue";
//@ts-ignore
import Login from "./components/Login.vue";
//@ts-ignore
import Register from "./components/Register.vue";

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
    },
    {
      path: "/Acceuil",
      component: Acceuil
    },

    {
      path: "/Apropos",
      component: Apropos
    },

    {
      path: "/Login",
      component: Login
    },

    {
      path: "/Register",
      component: Register
    },

    {
      path: "/Users",
      component: Users
    }
  ]
});
