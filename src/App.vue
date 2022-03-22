<template>
  <div id="app">
    <template v-if="this.$store.state.connexionToken">
      <NavBarComponent></NavBarComponent>
    </template>
    <template v-else>
      <NavBarNotConnectedComponent></NavBarNotConnectedComponent>
    </template>
    <div class="container mt-4">
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
  mounted() {
    if (!this.$store.state.connexionToken) {
      this.$router.push('/connection')
    }
  }
}
</script>

<style lang="scss">
</style>
