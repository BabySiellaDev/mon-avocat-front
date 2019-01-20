<template>
  <div>
    <div class="columns is-multiline">
      <div class="card column is-4" v-for="user in users" :key="user.id">
        <div class="card-image">
          <figure class="image is-4by3">
            <img
              src="https://versions.bulma.io/0.7.0/images/placeholders/1280x960.png"
              alt="Placeholder image"
            >
          </figure>
        </div>
        <div class="card-content">
          <div class="media">
            <div class="media-left">
              <figure class="image is-48x48">
                <img
                  src="https://versions.bulma.io/0.7.0/images/placeholders/96x96.png"
                  alt="Placeholder image"
                >
              </figure>
            </div>
            <div class="media-content">
              <p class="title is-4">{{user.name}}</p>
              <p class="subtitle is-6">{{user.email}}</p>
            </div>
          </div>

          <div class="content">
            {{user.address.street}}__{{user.address.city}}__{{user.address.zipcode}}
            <br>
            {{user.phone}}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Users",
  data() {
    return { users: [] };
  },
  mounted() {
    axios
      .get(
        "https://jsonplaceholder.typicode.com/users?fbclid=IwAR2_Ljk2A08SVAWSlzTb2g4xsINXtLN_bBEtcnvCxHMi_126zGO6QWM1hts"
      )
      .then(response => {
        this.users = response.data;
      });
  }
};
</script>

<style>
</style>
