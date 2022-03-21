<template>
<div class="box mt-5 columns">
  <div class="column is-3 aText">Titre <br> {{ event.title }}</div>
  <div class="column is-3 aText">Créateur <br> {{ event.creator }}</div>
  <div class="column is-3 aText">Date <br> {{ event.date }}</div>
  <div class="column is-flex is-justify-content-right">
    <button class="button is-info mr-3" @click="isCardModalActive = true">Infos</button>
    <button class="button is-danger">Supprimer</button>
  </div>

  <b-modal v-model="isCardModalActive" :width="640" scroll="keep">
    <div class="card">
      <div class="card-header">
        <div class="card-header-title is-size-4">{{ event.title }}</div>
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
      isCardModalActive: false
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