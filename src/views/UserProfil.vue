<template>
<div v-if="ready" class="columns">
  <div class="box column is-8 is-offset-2 my-6">
    <h1 class="title has-text-centered mb-1">Profil de {{ fullname }}</h1>
    <p v-if="user.level > 10" class="has-text-centered has-text-danger">Cet utilisateur est un administrateur</p>
    <p class="subtitle has-text-centered mt-5 mb-1">{{ user.mail }}</p>
    <p class="has-text-centered mt-5">Dernière connexion le {{ user.updated_at }}</p>
    <div v-if="user.inactive === 1" class="has-text-centered">
      <p class="has-text-centered is-italic has-text-danger mb-2">Utilisateur inactif ! Voulez vous le supprimer ?</p>
      <b-button type="is-danger"
                icon-pack="fa-solid"
                icon-right="trash"
                @click="deleteUser">
        Supprimer
      </b-button>
    </div>

    <div v-if="events.length > 0" class="mt-6 has-text-centered">
      <h2 class="title is-size-4">Événements créés</h2>
      <div class="is-flex is-justify-content-center">
        <b-field class="has-text-centered">
          <b-checkbox v-model="checkbox">Voir seulement les événements inactifs</b-checkbox>
        </b-field>
        <b-tooltip id="inactiveElement" label="Événements inactifs">
        </b-tooltip>
      </div>
      <template v-for="event in filteredEvents">
        <OneEventComponent :event="event"></OneEventComponent>
      </template>
    </div>
  </div>
</div>
</template>

<script>
import OneEventComponent from "@/components/EventsComponents/OneEventComponent";
export default {
  name: "userProfil",
  components: {
    OneEventComponent
  },
  data() {
    return{
      user: [],
      events: [],
      ready: false,
      checkbox: this.$store.state.toggleInactivityEvents,
    }
  },
  mounted() {
    if (this.$store.state.backOfficeToken) {
      this.axios.get(`${this.$urlBackOffice}users/${this.$route.params.id}`, {
        headers: { Authorization: `Bearer ${this.$store.state.backOfficeToken}` }
      })
      .then(response => {
        this.user = response.data.user
        this.events = response.data.events
        this.ready = true
      })
      .catch(() => {
        this.$router.push('/error')
      })
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
        this.$router.push('/users')
      })
      .catch(() => {
        this.$router.push('/error')
      })
    },
    setCheckBoxTrue() {
      this.$store.commit('setInactivityEvents', true)
    },
    setCheckBoxFalse() {
      this.$store.commit('setInactivityEvents', false)
    }
  },
  computed: {
    fullname() {
      return this.user.firstname + " " + this.user.lastname
    },
    filteredEvents() {
      if (this.checkbox) {
        this.setCheckBoxTrue()
        return this.events.filter(event => event.inactive)
      } else {
        this.setCheckBoxFalse()
        return this.events;
      }
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