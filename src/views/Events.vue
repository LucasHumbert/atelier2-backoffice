<template>
  <div>
    <h1 class="has-text-centered title">Liste des événements</h1>

    <div class="is-flex is-justify-content-center">
      <b-field class="has-text-centered">
        <b-checkbox v-model="checkbox">Voir seulement les événements inactifs</b-checkbox>
      </b-field>
      <b-tooltip id="inactiveElement" label="Événement inactif">
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
      events: [
        {title: "Un titre", desc: "Une desc", creator: "moi", date: "12/02/2022", inactive: 1},
        {title: "aze", desc: "pppppp", creator: "moi", date: "12/02/2022", inactive: 0},
        {title: "test", desc: "test stsq", creator: "moi", date: "12/02/2022", inactive: 0},
        {title: "title", desc: "desc", creator: "moi", date: "12/02/2022", inactive: 1},
        {title: "moiaze", desc: "une description plutot longue", creator: "moi", date: "12/02/2022", inactive: 0},
        {title: "mamcita", desc: "mamaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa", creator: "moi", date: "12/02/2022", inactive: 1},

      ]
    }
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