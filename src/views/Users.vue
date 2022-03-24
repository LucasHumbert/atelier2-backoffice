<template>
  <div>
    <h1 class="has-text-centered title">Liste des utilisateurs</h1>

    <div class="is-flex is-justify-content-center">
      <b-field class="has-text-centered">
        <b-checkbox v-model="checkbox">Voir seulement les utilisateurs inactifs</b-checkbox>
      </b-field>
      <b-tooltip id="inactiveElement" label="Utilisateurs inactifs">
      </b-tooltip>
    </div>


    <div v-for="user in filteredUsers" class="container">
      <OneUserComponent :user="user"></OneUserComponent>
    </div>
  </div>
</template>

<script>
import OneUserComponent from "@/components/UsersComponents/OneUserComponent";

export default {
  name: "UsersView",
  components: {
    OneUserComponent
  },
  data() {
    return {
      checkbox: this.$store.state.toggleInactivityUsers
    }
  },
  computed: {
    filteredUsers() {
      if (this.checkbox) {
        this.setCheckBoxTrue()
        return this.$store.state.users.filter(event => event.inactive)
      } else {
        this.setCheckBoxFalse()
        return this.$store.state.users;
      }
    }
  },
  methods: {
    setCheckBoxTrue() {
      this.$store.commit('setInactivityUsers', true)
    },
    setCheckBoxFalse() {
      this.$store.commit('setInactivityUsers', false)
    }
  }
}
</script>

<style scoped>
#inactiveElement{
  background-color: #E00000;
  width: 15px;
  height: 20px;
  box-shadow: 1px 1px 2px black;
}
</style>