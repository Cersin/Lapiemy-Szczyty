<template>
  <div class="home">
    <h1>Headerek</h1>
    <card></card>
    <!--
    <div class="category" v-for="category in categories" v-bind:key="category.name">
      <p>{{ category.name }}</p>
    </div>
    -->
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import card from "../components/card";

export default {
  name: "Home",
  components: { card },
  computed: {
    ...mapGetters({
      categories: "categories/getCategories",
    }),
    // categories() {
    //   return this.$store.getters.categories();
    // }
  },
};
</script>

<style lang="scss" scoped>
.home {
  min-height: 100%;
  // background-color: orangered;
}
// .category {
//   grid-row: start-content / end-content;
//   display: grid;
// }
</style>
