<template>
  <div>
    <h1 class="has-text-centered title">Liste des utilisateurs</h1>
    <div v-for="user in users" class="container">
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
      users: [
        {firstname: "Lucas", lastname: "Humbert", email: "lucas@gmail.com", lastConnection: "12/02/2021"},
        {firstname: "Lucas", lastname: "Humbert", email: "lucas@gmail.com", lastConnection: "12/02/2021"},
        {firstname: "Lucas", lastname: "Humbert", email: "lucas@gmail.com", lastConnection: "12/02/2021"},
        {firstname: "Lucas", lastname: "Humbert", email: "lucas@gmail.com", lastConnection: "12/02/2021"},
        {firstname: "Lucas", lastname: "Humbert", email: "lucas@gmail.com", lastConnection: "12/02/2021"},
        {firstname: "Lucas", lastname: "Humbert", email: "lucas@gmail.com", lastConnection: "12/02/2021"},
        {firstname: "Lucas", lastname: "Humbert", email: "lucas@gmail.com", lastConnection: "12/02/2021"},
      ]
    }
  }
}
</script>

<style scoped>

</style>