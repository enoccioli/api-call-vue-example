<template>
  <section class="search">
    <router-link to="/home">
      <v-btn> Home </v-btn>
    </router-link>

    <router-link to="/history">
      <v-btn> History </v-btn>
    </router-link>

    <v-form>
      <v-text-field v-model="search" label="Search Input"></v-text-field>

      <v-btn @click="getItemsAction(search)">Search</v-btn>
    </v-form>

    <ul>
      <li v-for="(item, index) in items" v-bind:key="index">
        {{ item }}
      </li>
    </ul>
  </section>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from "vuex";
export default {
  name: "Search",
  data() {
    return {
      search: "",
    };
  },
  computed: {
    ...mapGetters(["items"]),
  },
  methods: {
    ...mapActions(["getItems"]),
    ...mapMutations(["appendHistory"]),
    async getItemsAction(search) {
      console.log(search);
      this.appendHistory(search);
      this.loading = true;
      await this.getItems(search);
      console.log(this.items);
      this.loading = false;
    },
  },
};
</script>

<style scoped></style>
