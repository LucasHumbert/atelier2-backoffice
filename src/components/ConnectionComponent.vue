<template>
  <div class="columns">
    <form @submit.prevent="connection" class="box column is-half is-offset-3 mt-4">
      <b-field label="Email">
        <b-input type="email"
                 maxlength="50"
                 v-model="email">
        </b-input>
      </b-field>
      <b-field label="Mot de passe">
        <b-input type="password"
                 v-model="password"
                 password-reveal>
        </b-input>
      </b-field>
      <div class="has-text-centered mt-5 mb-2">
        <button class="button">Valider</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "ConnectionComponent",
  methods: {
    connection(){
      if (this.email && this.password) {
        this.axios.get(`${this.$urlAuth}auth`, {
          auth: {
            username: this.email,
            password: this.password
          }
        })
        .then(response => {
          this.$store.commit('setToken', response.data.accessToken)
          this.$router.push('/')
        })
        .catch(() => {
          this.$buefy.toast.open({
            duration: 5000,
            message: `Erreur d'authentification`,
            position: 'is-bottom',
            type: 'is-danger'
          })
        })
      } else {
        this.$buefy.toast.open({
          duration: 5000,
          message: `Veuillez renseigner tout les champs`,
          position: 'is-bottom',
          type: 'is-danger'
        })
      }
    }
  },
  data() {
    return {
      email: '',
      password: ''
    }
  }
}
</script>

<style scoped>

</style>