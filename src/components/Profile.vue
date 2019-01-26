<template>
  <div>
    <div id="modifier" class="modal">
      <div class="modal-background" onclick="cmodifier()"></div>
      <div class="modal-content">
        <div class="box"></div>
      </div>
      <button class="modal-close is-large" aria-label="close" onclick="cmodifier()"></button>
    </div>
    <div class="container box">
      <div class="columns">
        <div class="column is-5">
          <figure class="image is-3by4">
            <img src="https://bulma.io/images/placeholders/128x128.png">
          </figure>
          <input class="input" type="file" style="width:100%;">
          <button class="button is-dark" style="width: 100%;">Changer D'image</button>
        </div>
        <div class="column is-7">
          <label class="label">Email:</label>
          <div class="box">
            <span></span>
          </div>
          <label class="label">Nom:</label>
          <div class="box">
            <span></span>
          </div>
          <label class="label">Prénom:</label>
          <div class="box">
            <span></span>
          </div>
          <label class="label">Location:</label>
          <div class="box">
            <span></span>
          </div>
          <label class="label">Spécialité:</label>
          <div class="box">
            <span></span>
          </div>
          <div class="container">
            <button class="button is-primary is-large" v-on:click="modifier()">Modifier</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Profile",
  methods: { modifier: function() {} }
};
</script>