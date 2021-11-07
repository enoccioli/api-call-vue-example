<template>
  <div class="history">
    <router-link to="/home">
      <v-btn> Home </v-btn>
    </router-link>

    <router-link to="/search">
      <v-btn> Search </v-btn>
    </router-link>

    <ul v-if="history.length > 0">
      <li v-for="(history, index) in history" v-bind:key="index">
        {{ history }}
      </li>
    </ul>
    <p v-else>No searches yet!</p>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Search",
  computed: {
    ...mapGetters(["history"]),
  },
};
</script>

<style scoped></style>
