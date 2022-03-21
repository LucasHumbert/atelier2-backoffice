<template>
<div class="box columns">
  <div class="column is-4 has-text-centered">
    <span class="is-size-2">{{ nbEvents }}</span>
    <p class="mt-3 is-size-5">événements crées</p>
  </div>
  <div class="column is-4 has-text-centered">
    <span class="is-size-2">{{ nbUsers }}</span>
    <p class="mt-3 is-size-5">utilisateurs inscrits</p>
  </div>
  <div class="column is-4 has-text-centered">
    <span class="is-size-2">{{ nbMessages }}</span>
    <p class="mt-3 is-size-5">messages postés</p>
  </div>
</div>
</template>

<script>
export default {
  name: "HomeDatasComponent",
  data() {
    return {
      nbEvents: 80,
      nbUsers: 192,
      nbMessages: 265
    }
  }
}
</script>

<style scoped>

</style>