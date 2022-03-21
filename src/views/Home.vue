<template>
  <div>
    <h1 class="has-text-centered title">Administration</h1>
    <div class="columns is-multiline mt-6">
      <div class="column is-offset-1 is-4 has-text-centered">
        <router-link to="events" class="button is-link is-light is-large">
          Gérer les événements
        </router-link>
      </div>
      <div class="column is-offset-2 is-4 has-text-centered">
        <router-link to="users" class="button is-link is-light is-large">
          Gérer les utilisateurs
        </router-link>
      </div>
      <div class="column is-offset-1 is-10 mt-6">
        <HomeDatasComponent></HomeDatasComponent>
      </div>
    </div>
  </div>
</template>

<script>
import HomeDatasComponent from "@/components/HomeComponents/HomeDatasComponent";
export default {
  name: 'HomeView',
  components: {
    HomeDatasComponent
  }
}
</script>
