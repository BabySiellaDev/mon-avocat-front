<template>
  <div class="container box">
    <div class="column is-6 is-offset-3">
      <div class="field">
        <label class="label">Email</label>
        <div class="control">
          <input id="email" class="input" type="text" placeholder="Email">
        </div>
      </div>
      <div class="field">
        <label class="label">ID</label>
        <div class="control">
          <input id="id" class="input" type="text" placeholder="id">
        </div>
      </div>
      <div class="field">
        <div class="control">
          <button class="button is-primary is-fullwidth" v-on:click="login()">Submit</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Login",
  methods: {
    login: function login() {
      var email = document.getElementById("email").value;
      var id = document.getElementById("id").value;
      axios
        .post(
          "/https://jsonplaceholder.typicode.com/users?fbclid=IwAR2_Ljk2A08SVAWSlzTb2g4xsINXtLN_bBEtcnvCxHMi_126zGO6QWM1hts",
          {
            email,
            id
          }
        )
        .then(data => {
          console.log("logged in");
        }, router.push("Profile"))
        .catch(error => {
          console.log("can't login");
        });
    }
  }
};
</script>

<style>
</style>
