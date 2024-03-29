<template>
  <div v-if="eventsReady">
    <h1 class="has-text-centered title">Liste des événements</h1>
    <div class="is-flex is-justify-content-center">
      <b-field class="has-text-centered">
        <b-checkbox v-model="checkbox">Voir seulement les événements inactifs</b-checkbox>
      </b-field>
      <b-tooltip id="inactiveElement" label="Événements inactifs">
      </b-tooltip>
    </div>
    <div class="is-flex is-justify-content-center">
      <p>Nombre d'éléments par page: </p>
      <select v-model="perPage">
        <option value="5">5</option>
        <option value="25">10</option>
        <option value="50">50</option>
        <option value="100">100</option>
        <option value="200">200</option>
      </select>
    </div>

    <div v-for="event in pagination" class="container">
      <OneEventComponent :event="event"></OneEventComponent>
    </div>
    <b-pagination
        v-if="filteredEvents.length > perPage"
        v-model="current"
        class="my-5"
        :total="total"
        :range-before="rangeBefore"
        :range-after="rangeAfter"
        :order="order"
        :size="size"
        :rounded="isRounded"
        :per-page="perPage"
        aria-next-label="Next page"
        aria-previous-label="Previous page"
        aria-page-label="Page"
        aria-current-label="Current page"
    />
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
      eventsReady: false,

      // pagination
      total: 0,
      current: 1,
      perPage: 5,
      rangeBefore: 1,
      rangeAfter: 1,
      order: 'is-centered',
      size: 'is-small',
      isRounded: true
    }
  },
  mounted() {
    if (this.$store.state.backOfficeToken) {
      this.axios.get(`${this.$urlBackOffice}events`, {
        headers: { Authorization: `Bearer ${this.$store.state.backOfficeToken}` }
      })
      .then(response => {
        this.$store.commit('setEvents', response.data.events)
        this.eventsReady = true
        this.total = this.$store.state.events.length
      })
      .catch(() => {
        this.$router.push('/error')
      })
    }
  },
  computed: {
    pagination () {
      let debut
      if (this.current === 1) {
        debut = 0
      } else {
        debut = this.current * this.perPage - this.perPage
      }
      const fin = debut + this.perPage
      return this.filteredEvents.slice(debut, fin)
    },
    filteredEvents() {
      if (this.checkbox) {
        this.setCheckBoxTrue()
        return this.$store.state.events.filter(event => event.inactive)
      } else {
        this.setCheckBoxFalse()
        return this.$store.state.events;
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