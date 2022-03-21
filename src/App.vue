<template>
  <div id="app">
    <NavBarComponent></NavBarComponent>
    <div class="container mt-4">
      <router-view/>
    </div>
  </div>
</template>

<script>
import NavBarComponent from "@/components/NavBarComponent";
export default {
  components: {
    NavBarComponent
  }
}
</script>

<style lang="scss">
</style>
