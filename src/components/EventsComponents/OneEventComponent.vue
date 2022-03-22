<template>
<div class="box mt-5 columns">
  <div class="column is-3 aText"><span class="has-text-weight-bold">Titre</span> <br> {{ event.title }}</div>
  <div class="column is-3 aText"><span class="has-text-weight-bold">Créateur</span> <br> {{ event.creator }}</div>
  <div class="column is-3 aText"><span class="has-text-weight-bold">Date</span> <br> {{ event.date }}</div>
  <div class="column is-flex is-justify-content-right">
    <button class="button is-info mr-3" @click="isCardModalActive = true">Infos</button>
    <button class="button is-danger">Supprimer</button>
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
        <div class="subtitle is-size-6">Organisé par <span class="is-underlined has-text-weight-bold">{{ event.creator }}</span> <br>Aura lieu le <span class="is-underlined has-text-weight-bold">{{ event.date }}</span></div>
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
      center: [51.505, -0.159],
      markerLatLng: [51.504, -0.159]
    }
  }
}
</script>

<style scoped>
.aText{
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
span{

}
</style>