<template>
  <div class="home">
    <div class="category" v-for="category in categories" v-bind:key="category.name">
      <p>{{ category.name }}</p>
    </div>
  </div>

</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: "Home",
  computed: {
    ...mapGetters({
      categories: 'categories/getCategories'
    })
    // categories() {
    //   return this.$store.getters.categories();
    // }
  }
}
</script>

<style lang="scss" scoped>
  .home {
    min-height: 100%;
    background-color: orangered;

  }
  .category {
    grid-row: start-content / end-content;

    display: grid;

  }
</style>
