<template>
<div class="box mt-5 columns">
  <div class="column is-3 aText"><span class="has-text-weight-bold">Nom</span> <br> {{ name }}</div>
  <div class="column is-3 aText"><span class="has-text-weight-bold">Email</span> <br> {{ user.email }}</div>
  <div class="column is-3 aText"><span class="has-text-weight-bold">Dernière connexion</span> <br> {{ user.lastConnection }}</div>
  <div class="column is-flex is-justify-content-right">
    <button class="button is-danger">Supprimer</button>
  </div>
</div>
</template>

<script>
export default {
  name: "OneUserComponent",
  props: ["user"],
  computed:{
    name(){
      return this.user.firstname + " " + this.user.lastname
    }
  }
}
</script>

<style scoped>

</style>