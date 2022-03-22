<template>
<div class="box mt-5 columns">
  <b-tooltip v-if="user.inactive" class="inactiveElement" label="Utilisateur inactif">
  </b-tooltip>
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

<style scoped lang="scss">
.box{
  position: relative;

  .inactiveElement {
    position: absolute;
    left: 10px;
    top: -2px;
    background-color: #E00000;
    width: 15px;
    height: 20px;
    box-shadow: 1px 1px 2px black;
  }
}
</style>