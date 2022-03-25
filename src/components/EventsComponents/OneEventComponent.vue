<template>
<div class="box mt-5 columns">
  <b-tooltip v-if="event.inactive" class="inactiveElement" label="Événement inactif">
  </b-tooltip>
  <div class="column is-3 aText"><span class="has-text-weight-bold">Titre</span> <br> {{ event.title }}</div>
  <div class="column is-3 aText" v-if="event.creatorUser"><span class="has-text-weight-bold">Créateur</span> <br> {{ fullname }}</div>
  <div class="column is-3 aText">
    <div v-if="event.lastMessage"><span class="has-text-weight-bold">Date du dernier message</span> <br> {{ event.lastMessage }}</div>
    <div v-else><span class="has-text-weight-bold">Date de l'événement</span> <br> {{ event.date }}</div>
  </div>
  <div class="column is-flex is-justify-content-right">
    <b-button type="is-info"
              class="mr-3"
              icon-pack="fa-solid"
              icon-right="circle-info"
              @click="isCardModalActive = true">
      Infos
    </b-button>
    <b-button type="is-danger"
              icon-pack="fa-solid"
              icon-right="trash"
              @click="deleteEvent">
      Supprimer
    </b-button>
  </div>

  <b-modal v-model="isCardModalActive" :width="640" scroll="keep">
    <div class="card">
      <div class="card-header">
        <div class="card-header-title is-size-4">{{ event.title }}</div>
      </div>
      <div class="card-image">
        <l-map style="height: 350px" :zoom="zoom" :center="center">
          <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
          <l-marker :lat-lng="markerLatLng"></l-marker>
        </l-map>
      </div>
      <div class="card-content">
        <div class="subtitle is-size-6">
          <span v-if="event.creatorUser">Organisé par <span class="is-underlined has-text-weight-bold">{{ fullname }}</span></span>
          <br>
          Aura lieu le <span class="is-underlined has-text-weight-bold">{{ event.date }}</span>
          <br>
          <div v-if="event.lastMessage">Dernier message le <span class="is-underlined has-text-weight-bold">{{ event.lastMessage }}</span></div>
          <div v-else>Aucun message</div>
        </div>
        <div class="content is-size-5">
          {{ event.desc }}
        </div>
      </div>
    </div>
  </b-modal>
</div>
</template>

<script>
export default {
  name: "OneEventComponent",
  props: ["event"],
  data(){
    return{
      isCardModalActive: false,
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      attribution: '&copy; <a target="_blank" href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      zoom: 15,
      center: [],
      markerLatLng: []
    }
  },
  mounted(){
    this.center = [this.event.lat, this.event.lon]
    this.markerLatLng = [this.event.lat, this.event.lon]
  },
  methods: {
    deleteEvent() {
      this.axios.delete(`${this.$urlBackOffice}events/${this.event.id}`, {
        headers: { Authorization: `Bearer ${this.$store.state.backOfficeToken}` }
      })
      .then(() => {
        this.$store.commit('setEvents', this.$store.state.events.filter(el => { return el.id !== this.event.id }))
        this.$buefy.toast.open({
          duration: 2000,
          message: `Événement supprimé`
        })
      })
      .catch(() => {
        this.$router.push('/error')
      })
    }
  },
  computed: {
    fullname() {
      return this.event.creatorUser.firstname + " " + this.event.creatorUser.lastname
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

.aText{
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>