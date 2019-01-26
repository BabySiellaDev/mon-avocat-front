<template>
  <div>
    <div class="container box" style="margin-top:10%">
      <div class="columns">
        <div class="column is-10">
          <input
            class="input"
            type="text"
            style="width:100%"
            placeholder="Search for Lawyers here..."
          >
        </div>
        <div class="column is-2 has-text-centered">
          <router-link to="Users">
            <button class="button is-primary" style="width:100%">Search!</button>
          </router-link>
        </div>
      </div>
    </div>
    <div class="container has-text-centered">
      <article class="message is-primary">
        <div class="message-header">
          <p>Bienvenue chez mon-avocat</p>
        </div>
        <div class="message-body">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          risus mi, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac
          ex sit amet fringilla. Nullam gravida purus diam, et dictum felis
          venenatis efficitur. Aenean ac eleifend lacus, in mollis lectus. Donec
          sodales, arcu et sollicitudin porttitor, tortor urna tempor ligula, id
          porttitor mi magna a neque. Donec dui urna, vehicula et sem eget,
          facilisis sodales sem.
        </div>

        <router-link to="Register" style="text-decoration: none;">
          <button class="button is-primary is-large">S'inscrire Mainenant!</button>
        </router-link>
      </article>
    </div>
  </div>
</template>

<script>
export default {
  name: "Acceuil"
};
</script>

<style scoped>
</style>
