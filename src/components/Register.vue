<template>
  <div class="container box">
    <div class="column is-6 is-offset-3">
      <form onsubmit="return register()">
        <div class="field">
          <label class="label">Email</label>
          <div class="control">
            <input id="email" class="input" type="email" placeholder="Email">
          </div>
        </div>
        <div class="field">
          <label class="label">Mot de Passe</label>
          <div class="control">
            <input id="password" class="input" type="password" placeholder="Shhh...">
          </div>
        </div>
        <div class="field">
          <label class="label">Confirmation du Mot de</label>
          <div class="control">
            <input
              id="confirmpassword"
              class="input"
              type="password"
              placeholder="veuillez confirmer"
            >
          </div>
        </div>

        <div class="field">
          <label class="label">Nom</label>
          <div class="control">
            <input id="nom" class="input" type="text" placeholder="Veuillez insérer votre Nom">
          </div>
        </div>
        <div class="field">
          <label class="label">Prénom</label>
          <div class="control">
            <input
              id="prénom"
              class="input"
              type="text"
              placeholder="veuillez insérer votre Prénom"
            >
          </div>
        </div>
        <div class="field">
          <label class="label">Location</label>
          <div class="control">
            <input
              id="location"
              class="input"
              type="text"
              placeholder="veuillez insérer votre Location"
            >
          </div>
        </div>
        <div class="field">
          <label class="label">Spécialité</label>
          <div class="control">
            <input
              id="spécialité"
              class="input"
              type="text"
              placeholder="veuillez insérer votre Spécialité"
            >
          </div>
        </div>
        <div class="field">
          <div class="control">
            <button class="button is-primary" type="submit">Confirmer</button>
            <button class="button is-primary" onclick="cmodifier()">Annuler</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "Register"
};
function register() {
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var cpassword = document.getElementById("confirmpassword").value;
  var nom = document.getElementById("nom").value;
  var prénom = document.getElementById("prénom").value;
  var location = document.getElementById("location").value;
  var spécialité = document.getElementById("spécialité").value;
  if (
    cpassword === password &&
    nom &&
    prénom &&
    location &&
    spécialité &&
    email &&
    password
  ) {
    axios
      .post("/api/v1/auth/register", {
        email,
        password,
        nom,
        prénom,
        location,
        spécialité
      })
      .then(data => {
        console.log("registered");
      })
      .catch(error => {
        console.log("not registered");
      });
  } else alert("Données Manquantes");
  return false;
}
</script>

<style>
</style>
