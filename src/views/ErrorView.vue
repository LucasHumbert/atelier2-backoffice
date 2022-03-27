<template>
<div class="has-text-centered">
  <h1 class="title is-size-2 has-text-centered">Unauthorized</h1>
  <b-button type="is-danger"
            icon-pack="fa-solid"
            icon-right="right-to-bracket"
            @click="deconnection">
    Deconnexion
  </b-button>
</div>
</template>

<script>
export default {
  name: "ErrorView",
  methods: {
    deconnection(){
      this.$store.commit('setToken', false)
      this.$router.push('/connection')
    }
  }
}
</script>

<style scoped>

</style>