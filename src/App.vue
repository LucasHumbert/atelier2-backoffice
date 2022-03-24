<template>
  <div id="app">
    <template v-if="this.$route.name !== 'error'">
      <template v-if="this.$store.state.backOfficeToken">
        <NavBarComponent></NavBarComponent>
      </template>
      <template v-else>
        <NavBarNotConnectedComponent></NavBarNotConnectedComponent>
      </template>
    </template>
    <div v-if="usersReady && eventsReady" class="container mt-4">
      <router-view/>
    </div>
  </div>
</template>

<script>
import NavBarComponent from "@/components/NavComponents/NavBarComponent";
import NavBarNotConnectedComponent from "@/components/NavComponents/NavBarNotConnectedComponent";
export default {
  components: {
    NavBarComponent,
    NavBarNotConnectedComponent
  },
  data() {
    return{
      usersReady: false,
      eventsReady: false
    }
  },
  mounted() {
    if (!this.$store.state.backOfficeToken) {
      this.$router.push('/connection')
    }

    this.axios.get(`${this.$urlBackOffice}events`, {
      headers: { Authorization: `Bearer ${this.$store.state.backOfficeToken}` }
    })
    .then(response => {
      this.$store.commit('setEvents', response.data.events)
      this.eventsReady = true
    })
    .catch(() => {
      this.$router.push('/error')
    })

    this.axios.get(`${this.$urlBackOffice}users`, {
      headers: { Authorization: `Bearer ${this.$store.state.backOfficeToken}` }
    })
    .then(response => {
      this.$store.commit('setUsers', response.data.users)
      this.usersReady = true
    })
    .catch(() => {
      this.$router.push('/error')
    })
  }
}
</script>

<style lang="scss">
</style>
