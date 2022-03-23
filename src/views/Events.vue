<template>
  <div>
    <h1 class="has-text-centered title">Liste des événements</h1>

    <div class="is-flex is-justify-content-center">
      <b-field class="has-text-centered">
        <b-checkbox v-model="checkbox">Voir seulement les événements inactifs</b-checkbox>
      </b-field>
      <b-tooltip id="inactiveElement" label="Événements inactifs">
      </b-tooltip>
    </div>

    <div v-for="event in filteredEvents" class="container">
      <OneEventComponent :event="event"></OneEventComponent>
    </div>
  </div>
</template>

<script>
import OneEventComponent from "@/components/EventsComponents/OneEventComponent";
export default {
  name: "EventsView",
  components: {
    OneEventComponent
  },
  data() {
    return {
      checkbox: this.$store.state.toggleInactivityEvents,
      events: []
    }
  },
  mounted() {
    this.axios.get(`${this.$urlBackOffice}events`, {
      headers: { Authorization: `Bearer ${this.$store.state.backOfficeToken}` }
    })
    .then(response => {
      console.log(response.data)
    })
  },
  computed: {
    filteredEvents() {
      if (this.checkbox) {
        this.setCheckBoxTrue()
        return this.events.filter(event => event.inactive)
      } else {
        this.setCheckBoxFalse()
        return this.events;
      }
    }
  },
  methods: {
    setCheckBoxTrue() {
      this.$store.commit('setInactivityEvents', true)
    },
    setCheckBoxFalse() {
      this.$store.commit('setInactivityEvents', false)
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