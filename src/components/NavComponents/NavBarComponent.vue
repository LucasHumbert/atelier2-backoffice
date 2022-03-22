<template>
  <b-navbar>
    <template #brand>
      <b-navbar-item tag="router-link" :to="{ path: '/' }">
        <img
            src="https://raw.githubusercontent.com/buefy/buefy/dev/static/img/buefy-logo.png"
            alt="Lightweight UI components for Vue.js based on Bulma"
        >
      </b-navbar-item>
    </template>
    <template #start>
      <b-navbar-item tag="router-link" :to="{ path: '/' }">
        Accueil
      </b-navbar-item>
      <b-navbar-item tag="router-link" :to="{ path: '/events' }">
        Événements
      </b-navbar-item>
      <b-navbar-item tag="router-link" :to="{ path: '/users' }">
        Utilisateurs
      </b-navbar-item>
    </template>
    <template #end>
      <b-navbar-item tag="div">
        <a class="button is-primary" @click="deconnection">
          <strong>Deconnexion</strong>
        </a>
      </b-navbar-item>
    </template>
  </b-navbar>
</template>

<script>
export default {
  name: "NavBarComponent",
  methods: {
    deconnection() {
      this.$store.commit('setToken', false)
      this.$router.push('/connection')
    }
  }
}
</script>

<style scoped>

</style>