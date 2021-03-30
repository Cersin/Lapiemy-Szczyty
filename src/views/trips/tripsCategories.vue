<template>
  <section>
      <div @click="goToArticleList(category.name)" class="category" v-for="category in categories" :key="category.name">
        <img class="category-img" :src="category.photo" alt="Article photo">
        <h1 class="category-name">{{ category.name }}</h1>
      </div>
  </section>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "tripsCategories",
  beforeCreate() {
    this.$store.dispatch('categories/getCategories');
  },
  computed: {
    ...mapGetters({
      categories: 'categories/getCategories'
    })
  },
  methods: {
    goToArticleList(category) {
      this.$router.push({ path: `/wycieczki/${category}`});
    }
  }
}
</script>

<style lang="scss" scoped>
@import "src/styles/abstract/variables";

section {
  width: 80%;
  margin: 2rem 0;

  display: grid;
  grid-gap: 3rem;
  align-content: start;
  justify-self: center;
}

.category {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  height: 20vh;
  cursor: pointer;

  &-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    filter: brightness(70%);

    grid-row: 1 / 2;
    grid-column: 1 / 2;
    transition: all 1s;
  }

  &-name {
    font-size: 3rem;
    color: $color-secondary;
    z-index: 10;

    grid-row: 1 / 2;
    grid-column: 1 / 2;
    align-self: center;
    justify-self: center;
    text-align: center;
    transition: all .5s;
  }

  &:hover &-name,
  &:active &-name {
    font-size: 4rem;
    color: lighten($color-secondary, 10);
  }

  &:hover &-img,
  &:active &-img {
    filter: brightness(90%);
  }
}


</style>
