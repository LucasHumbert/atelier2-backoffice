<template>
<div>
  <h1 class="has-text-centered title">Se connecter</h1>
  <ConnectionComponent></ConnectionComponent>
</div>
</template>

<script>
import ConnectionComponent from "@/components/ConnectionComponent";
export default {
  name: "Connection",
  components: {
    ConnectionComponent
  },
  mounted() {
    if (this.$store.state.connexionToken) {
      this.$router.push("/")
    }
  }
}
</script>

<style scoped>

</style>