<template>
  <nav class="navbar" role="navigation" aria-label="main navigation" style="margin-bottom:2.5%">
    <div class="navbar-brand">
      <router-link class="navbar-item" to="Acceuil">
        <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28">
      </router-link>
      <a
        role="button"
        class="navbar-burger burger"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbar"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>
    <div id="navbar" class="navbar-menu">
      <div class="navbar-start">
        <router-link class="navbar-item" to="Acceuil">Acceuil</router-link>
        <router-link class="navbar-item" to="apropos">apropos</router-link>
      </div>
      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <router-link to="Login">
              <button id="login" class="button is-primary">Se Connecter</button>
            </router-link>

            <router-link to="Register">
              <button id="Register" class="button is-light">S'inscrire</button>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  name: "Navbar"
};
</script>