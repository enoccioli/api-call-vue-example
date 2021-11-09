<template>
  <section>
    <router-link to="/search">
      <v-btn> Search </v-btn>
    </router-link>

    <router-link to="/history">
      <v-btn> History </v-btn>
    </router-link>
  </section>
</template>

<script>
export default {
  name: "Home",
};
</script>
