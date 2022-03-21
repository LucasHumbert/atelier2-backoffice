<template>
  <div>
    <h1 class="has-text-centered title">Liste des événements</h1>
    <div v-for="event in events" class="container">
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
      events: [
        {title: "title", desc: "desc", creator: "moi", date: "12/02/2022"},
        {title: "title", desc: "desc", creator: "moi", date: "12/02/2022"},
        {title: "title", desc: "desc", creator: "moi", date: "12/02/2022"},
        {title: "title", desc: "desc", creator: "moi", date: "12/02/2022"},
        {title: "title", desc: "desc", creator: "moi", date: "12/02/2022"},
        {title: "title", desc: "desc", creator: "moi", date: "12/02/2022"},
        {title: "title", desc: "desc", creator: "moi", date: "12/02/2022"},
      ]
    }
  }
}
</script>

<style scoped>

</style>