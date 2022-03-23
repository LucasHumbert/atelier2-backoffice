<template>
<transition v-if="display" name="fade">
  <div class="box mt-5 columns">
    <b-tooltip v-if="user.inactive" class="inactiveElement" label="Utilisateur inactif">
    </b-tooltip>
    <div class="column is-3 aText"><span class="has-text-weight-bold">Nom</span> <br> {{ name }}</div>
    <div class="column is-3 aText"><span class="has-text-weight-bold">Email</span> <br> {{ user.mail }}</div>
    <div class="column is-3 aText"><span class="has-text-weight-bold">Dernière connexion</span> <br> {{ user.updated_at }}</div>
    <div class="column is-flex is-justify-content-right">
      <b-button type="is-danger"
                icon-pack="fa-solid"
                icon-right="trash"
                @click="deleteUser">
        Supprimer
      </b-button>
    </div>
  </div>
</transition>
</template>

<script>
export default {
  name: "OneUserComponent",
  props: ["user"],
  data(){
    return {
      display: true
    }
  },
  computed:{
    name(){
      return this.user.firstname + " " + this.user.lastname
    }
  },
  methods: {
    deleteUser() {
      this.axios.delete(`${this.$urlBackOffice}users/${this.user.id}`, {
        headers: { Authorization: `Bearer ${this.$store.state.backOfficeToken}` }
      })
      .then(() => {
        this.display = false
        this.$buefy.toast.open({
          duration: 2000,
          message: `Utilisateur supprimé`
        })
      })
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