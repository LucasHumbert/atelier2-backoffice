<template>
<div v-if="ready" class="box columns">
  <div class="column is-4 has-text-centered">
    <span class="is-size-2">{{ datas.nbEvents }}</span>
    <p class="mt-3 is-size-5">événements créés</p>
  </div>
  <div class="column is-4 has-text-centered">
    <span class="is-size-2">{{ datas.nbUsers }}</span>
    <p class="mt-3 is-size-5">utilisateurs inscrits</p>
  </div>
  <div class="column is-4 has-text-centered">
    <span class="is-size-2">{{ datas.nbMessages }}</span>
    <p class="mt-3 is-size-5">messages postés</p>
  </div>
</div>
</template>

<script>
export default {
  name: "HomeDatasComponent",
  data() {
    return {
      datas: [],
      ready: false
    }
  },
  mounted() {
    if (this.$store.state.backOfficeToken && this.$route.name === 'home') {
      this.axios.get(`${this.$urlBackOffice}homeInfos`, {
        headers: { Authorization: `Bearer ${this.$store.state.backOfficeToken}` }
      })
      .then(response => {
        this.datas = response.data
        this.ready = true
      })
      .catch(() => {
        this.$router.push('/error')
      })
    }
  }
}
</script>

<style scoped>

</style>