<template>
<div class="box mt-5 columns">
  <b-tooltip v-if="user.inactive" class="inactiveElement" label="Utilisateur inactif">
  </b-tooltip>
  <div class="column is-3 aText"><span class="has-text-weight-bold">Nom</span> <br> {{ name }}</div>
  <div class="column is-3 aText"><span class="has-text-weight-bold">Email</span> <br> {{ user.mail }}</div>
  <div class="column is-3 aText"><span class="has-text-weight-bold">Dernière connexion</span> <br> {{ user.updated_at }}</div>
  <div class="column is-flex is-justify-content-right">
    <b-button type="is-info"
              class="mr-3"
              icon-pack="far"
              icon-right="user"
              @click="$router.push({ name: 'userProfil', params: { id: user.id }})">
      Profil
    </b-button>
    <b-button type="is-danger"
              icon-pack="fa-solid"
              icon-right="trash"
              @click="deleteUser">
      Supprimer
    </b-button>
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
  },
  methods: {
    deleteUser() {
      this.axios.delete(`${this.$urlBackOffice}users/${this.user.id}`, {
        headers: { Authorization: `Bearer ${this.$store.state.backOfficeToken}` }
      })
      .then(() => {
        this.$store.commit('setUsers', this.$store.state.users.filter(el => { return el.id !== this.user.id }))
        this.$buefy.toast.open({
          duration: 2000,
          message: `Utilisateur supprimé`
        })
      })
      .catch(() => {
        this.$router.push('/error')
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